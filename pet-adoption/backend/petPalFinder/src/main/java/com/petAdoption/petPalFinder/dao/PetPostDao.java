package com.petAdoption.petPalFinder.dao;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.ScrollPosition.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationOperation;
import org.springframework.data.mongodb.core.aggregation.ConditionalOperators;
import org.springframework.data.mongodb.core.aggregation.FacetOperation;
import org.springframework.data.mongodb.core.aggregation.LimitOperation;
import org.springframework.data.mongodb.core.aggregation.MatchOperation;
import org.springframework.data.mongodb.core.aggregation.SkipOperation;
import org.springframework.data.mongodb.core.aggregation.SortOperation;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.expression.spel.ast.VariableReference;
import org.springframework.stereotype.Repository;

import com.mongodb.client.AggregateIterable;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoIterable;
import com.petAdoption.petPalFinder.models.AppointmentStatus;
import com.petAdoption.petPalFinder.models.Location;
import com.petAdoption.petPalFinder.models.Organization;
import com.petAdoption.petPalFinder.models.Pet;
import com.petAdoption.petPalFinder.models.PetPost;

@Repository
public class PetPostDao {

    @Autowired
    MongoTemplate template;

    public List<PetPost> nearByPetPost(Location location){

         AggregationOperation lookupOperation = Aggregation.lookup("organizations", "posterId", "_id", "result");

        AggregationOperation key1Result = Aggregation.match(Criteria.where("result.location.street").is(location.getStreet())
                .and("result.location.city").is(location.getCity())
                .and("result.location.district").is(location.getDistrict())
                .and("result.location.state").is(location.getState())
                .and("result.location.country").is(location.getCountry()));

        AggregationOperation key2Result = Aggregation.match(Criteria.where("result.location.city").is(location.getCity())
                .and("result.location.district").is(location.getDistrict())
                .and("result.location.state").is(location.getState())
                .and("result.location.country").is(location.getCountry())
                .and("result.location.street").not().regex(location.getStreet()));

        AggregationOperation key3Result = Aggregation.match(Criteria.where("result.location.district").is(location.getDistrict())
                .and("result.location.state").is(location.getState())
                .and("result.location.country").is(location.getCountry())
                .and("result.location.street").not().regex(location.getStreet())
                .and("result.location.city").not().regex(location.getCity()));

        AggregationOperation key4Result = Aggregation.match(Criteria.where("result.location.state").is(location.getState())
                .and("result.location.country").is(location.getCountry())
                .and("result.location.street").not().regex(location.getStreet())
                .and("result.location.city").not().regex(location.getCity())
                .and("result.location.district").not().regex(location.getDistrict()));

        Aggregation aggregation1 = Aggregation.newAggregation(
                lookupOperation,
                key1Result
        );
        Aggregation aggregation2 = Aggregation.newAggregation(
                lookupOperation,
                key2Result
        );
        Aggregation aggregation3 = Aggregation.newAggregation(
                lookupOperation,
                key3Result
        );
        Aggregation aggregation4 = Aggregation.newAggregation(
                lookupOperation,
                key4Result
        );

       
        List<PetPost> list= new ArrayList(List.of( template.aggregate(aggregation1, "pet_posts", PetPost.class).getMappedResults()));
        list.addAll(template.aggregate(aggregation2, "pet_posts", PetPost.class).getMappedResults());
        list.addAll(template.aggregate(aggregation3, "pet_posts", PetPost.class).getMappedResults());
        list.addAll(template.aggregate(aggregation4, "pet_posts", PetPost.class).getMappedResults());
        return list;


    }

    public List<PetPost> nearByPetPost1(Location location, Integer page){
        Integer limit = 8;
       List<Document> arr = Arrays.asList(new Document("$lookup", 
    new Document("from", "organizations")
            .append("localField", "posterId")
            .append("foreignField", "_id")
            .append("as", "result")), 
    new Document("$facet", 
    new Document("key1Result", Arrays.asList(new Document("$match", 
                new Document("result.location.street", location.getStreet())
                        .append("result.location.city",location.getCity())
                        .append("result.location.district",location.getDistrict())
                        .append("result.location.state",location.getState())
                        .append("result.location.country",location.getCountry()))))
            .append("key2Result", Arrays.asList(new Document("$match", 
                new Document("result.location.city", location.getCity())
                        .append("result.location.district", location.getDistrict())
                        .append("result.location.state", location.getState())
                        .append("result.location.country", location.getCountry())
                        .append("result.location.street", 
                new Document("$not", 
                new Document("$regex",location.getStreet()))))))
            .append("key3Result", Arrays.asList(new Document("$match", 
                new Document("result.location.district", location.getDistrict())
                        .append("result.location.state", location.getState())
                        .append("result.location.country", location.getCountry())
                        .append("result.location.street", 
                new Document("$not", 
                new Document("$regex", location.getStreet())))
                        .append("result.location.city", 
                new Document("$not", 
                new Document("$regex", location.getCity()))))))
            .append("key4Result", Arrays.asList(new Document("$match", 
                new Document("result.location.state", location.getState())
                        .append("result.location.country", location.getCountry())
                        .append("result.location.street", 
                new Document("$not", 
                new Document("$regex", location.getStreet())))
                        .append("result.location.city", 
                new Document("$not", 
                new Document("$regex", location.getCity())))
                        .append("result.location.district", 
                new Document("$not", 
                new Document("$regex", location.getDistrict()))))))), 
    new Document("$project", 
    new Document("result", 
    new Document("$concatArrays", Arrays.asList(new Document("$ifNull", Arrays.asList("$key1Result", Arrays.asList())), 
                    new Document("$ifNull", Arrays.asList("$key2Result", Arrays.asList())), 
                    new Document("$ifNull", Arrays.asList("$key3Result", Arrays.asList())), 
                    new Document("$ifNull", Arrays.asList("$key4Result", Arrays.asList())))))), 
    new Document("$unwind", "$result"), 
    new Document("$replaceRoot", 
    new Document("newRoot", "$result")), 
    new Document("$skip", page*limit), 
    new Document("$limit", limit));

   AggregateIterable<Document> output = template.getCollection("pet_posts").aggregate(arr);
//    MongoCursor<PetPost> b = output.map(val -> new PetPost(
//         val.get("_id",String.class),
//         val.get("category",String.class),
//         val.get("breed",String.class),
//         val.get("quantity",Integer.class),
//         val.get("gender",String.class),
//         val.get("weight",Double.class),
//         val.get("isInfected",Boolean.class),
//         val.get("posterId",Organization.class),
//         val.get("images",String.class),
//         val.get("description",String.class),
//         val.get("isAdopted",Boolean.class),
//         val.get("postedDate",Date.class)
//    )).iterator();
   AggregateIterable<PetPost>  petPosts= template.getCollection("pet_posts").aggregate(arr,PetPost.class);
   AggregateIterable<List> a = template.getCollection("pet_posts").aggregate(arr,List.class);
   List<PetPost> pet = new ArrayList<>();
   for (Document dbObject : output) {
        var post = template
        .getConverter()
        .read(PetPost.class, dbObject);
        pet.add(post);
    }
    System.out.println(template.getCollection("pet_posts").aggregate(arr));
    return pet;

   }

    public List<String> petCategoryInput( String value){
        Criteria criteria = Criteria.where("category").regex(value,"i");
		Query query = new Query(criteria);
                System.out.println(template.findDistinct(query,"category", PetPost.class, String.class));
        return template.findDistinct(query,"category", PetPost.class, String.class);
    }

    public List<String> petBreedInput(String category, String breed){
        Criteria criteria = Criteria.where("category").regex(category,"i").andOperator(Criteria.where("breed").regex(breed,"i"));
		Query query = new Query(criteria);
                System.out.println(template.findDistinct(query,"breed", PetPost.class, String.class));
        return template.findDistinct(query,"breed", PetPost.class, String.class);
    }

    public List<PetPost> searchedPets(String category, String breed,String gender, String isInfected, String city,Integer page){
        AggregationOperation lookupOperation = Aggregation.lookup("organizations", "posterId", "_id", "result");
        Criteria genderCriteria ;
        if(gender.equals("")){
                genderCriteria = Criteria.where("gender").regex(gender,"i");
        }else{
                genderCriteria = Criteria.where("gender").is(gender);
        }  
        MatchOperation match = Aggregation.match(Criteria.where("breed").regex(breed,"i")
                .and("category").regex(category,"i")
                .and("result.location.city").regex(city,"i")
                .andOperator(genderCriteria));
              
        MatchOperation match2 = Aggregation.match(Criteria.where("isInfected").is(isInfected.equals("true")?true:false));
        SkipOperation skip = Aggregation.skip(page*10);
        LimitOperation limit = Aggregation.limit(10);
        SortOperation sort = Aggregation.sort(Sort.by(Order.desc("postedDate")));
        Aggregation aggregation1 ;

        if(isInfected.equals("")){
                aggregation1= Aggregation.newAggregation(
                lookupOperation,
                match,sort,skip,limit);
        }else{
                aggregation1= Aggregation.newAggregation(
                lookupOperation,
                match,
                match2,sort,skip,limit);
        }
        
        return template.aggregate(aggregation1, "pet_posts", PetPost.class).getMappedResults();
    }
    
}
