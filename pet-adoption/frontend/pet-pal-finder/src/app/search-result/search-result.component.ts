import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchInputService } from '../service/search-input.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PetPost } from '../models/models';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule,MatAutocompleteModule,FormsModule,MatButtonModule, MatInputModule, MatIconModule,],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent {


  constructor(private route: ActivatedRoute,private router:Router, private searchService:SearchInputService){}

  category: string='';
  breed: string='';
  gender: string='Both';
  isInfected: string='';
  city: string='';
  page: number = 0;
  categories: string[]=[];
  breeds: string[]=[];
  genders: string[]=["male","female","Both"];
  cites: string[]=[];

  petPosts:PetPost[]=[]
  isLoading: boolean = false;
  id:string='';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const documentHeight = document.body.scrollHeight;
    if (scrollPosition + windowHeight >= documentHeight) {
      this.loadData();
    }
  }

  loadData(){
    this.page++;
    console.log("asdfghjkl");
    
    this.searchService.searchedPets(this.category, this.breed, this.gender === "Both" ? '':this.gender, this.isInfected, this.city, this.page).subscribe({
      next:(val) => {
        this.petPosts = [...this.petPosts, ...val];
      }
    })
  }

  search() {
    console.log(this.breed);
    this.page = 0
    this.searchService.searchedPets(this.category, this.breed, this.gender === "Both" ? '':this.gender, this.isInfected, this.city, this.page).subscribe({
      next:(val) => {
        this.petPosts = val;
        
      }
    })
    }

    getCategory() {
      this.searchService.categorySearchInput(this.category).subscribe({
        next: (val) => {
          this.categories = val
          console.log(val);
          
        }
      })
    }

    
  getBreed() {
    this.searchService.breadSearchInput(this.category,this.breed).subscribe({
      next: (val) => {
        this.breeds = val
        console.log(val);
        
      }
    })
  }
  getCity() {
    console.log("city",this.cites);
    
  this.searchService.citySearchInput(this.city).subscribe({
    next: (val) => {
      this.cites = val;
    }
  })
  }

  viewProfile(id:string){
    this.router.navigate(['pet/pet-profile',id])
  }
  getSearchInput() {
  throw new Error('Method not implemented.');
  }
  

  ngOnInit(){
    this.category = this.route.snapshot.paramMap.get('category') || '';
    this.categories = [this.category]
    this.searchService.searchedPets(this.category, this.breed, this.gender === "Both" ? '':this.gender, this.isInfected, this.city, this.page).subscribe({
      next:(val) => {
        this.petPosts = val;
        
      }
    })
    
  }
}
