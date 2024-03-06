import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetPostService } from '../service/pet-post.service';
import { ProfileService } from '../service/profile.service';
import { PetPost } from '../models/models';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SearchInputService } from '../service/search-input.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule, MatButtonModule, MatInputModule, MatIconModule,MatAutocompleteModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {


  filteredOptions:string[] = ['aaaaa','sssssssss','ddddddd','ffffff','ggggggggg','ttttt']
  categories:string[]=[]
  inputValue:string = '';
  

  constructor(
    private petPostService: PetPostService,
    private profileService: ProfileService,
    private authService: AuthService,
    private searchInput:SearchInputService,
    private route:Router
  ) {}

  petPosts: PetPost[] = [];
  ngOnInit() {
    console.log('home');
    if (this.authService.isAuthenticated()) {
      this.authService.sharedId$.subscribe({
        next: (id) => {
          if (this.authService.hasAccess(environment.adopter)) {
            this.profileService.getAdopterProfile(id).subscribe({
              next: (obj) => {
                this.petPostService.getNearByPet(obj.location).subscribe({
                 
                  
                  next: (val: any) => {
                    console.log("adoptr",val);
                    this.petPosts = val;
                  },
                });
              },
            });
          } else if (this.authService.hasAccess(environment.veterinaryDoctor)) {
            this.profileService.getVeterinaryDoctorProfile(id).subscribe({
              next: (obj) => {
                this.petPostService.getNearByPet(obj.location).subscribe({
                  next: (val: any) => {
                    console.log("veti",val);
                    this.petPosts = val;
                  },
                });
              },
            });
          }
        },
      });
    } else {
      this.petPostService.getLatestPost().subscribe({
        next: (val) => {
          this.petPosts = val;
        },
      });
    }

    this.searchInput.categorySearchInput(this.inputValue).subscribe({
      next: (val) => {
        this.categories = val
        console.log(val);
        
      }
    })
  }
  getSearchInput() {
    this.searchInput.categorySearchInput(this.inputValue).subscribe({
      next: (val) => {
        this.categories= val
        console.log(val);
        
      }
    })
    }

  navigate(id: string) {
    console.log(id);
    
    this.route.navigate(['pet/pet-profile',id])
    }

    search() {
      this.route.navigate(['pet/search',this.inputValue])
    }
}
