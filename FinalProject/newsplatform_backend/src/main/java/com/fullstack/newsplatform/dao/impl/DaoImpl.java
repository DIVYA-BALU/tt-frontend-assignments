package com.fullstack.newsplatform.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.fullstack.newsplatform.dao.DaoInterface;
import com.fullstack.newsplatform.model.News;

@Repository
public class DaoImpl implements DaoInterface{
	
	@Autowired
	MongoTemplate mongoTemplate;

	@Override
	public List<News> searchNews(String search) {
		
		Criteria critera2 = Criteria.where("status").is("ACCEPTED");
		Criteria criteria = Criteria.where("title").regex(search, "i").andOperator(critera2);

		Query query = new Query(criteria);
		System.out.println(query);

		return mongoTemplate.find(query, News.class);
	}

	
}
