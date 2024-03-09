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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchInputService } from '../service/search-input.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  categories: string[] = [];
  inputValue: string = '';

  private idSubscription: Subscription = new Subscription();
  private userSubscription: Subscription = new Subscription();
  private searchSubscription: Subscription = new Subscription();
  private getPostSubscription: Subscription = new Subscription();

  constructor(
    private petPostService: PetPostService,
    private profileService: ProfileService,
    private authService: AuthService,
    private searchInput: SearchInputService,
    private route: Router
  ) {}

  petPosts: PetPost[] = [];
  ngOnInit() {
    console.log('home');
    if (this.authService.isAuthenticated()) {
      this.idSubscription = this.authService.sharedId$.subscribe({
        next: (id) => {
          if (this.authService.hasAccess(environment.adopter)) {
            this.userSubscription = this.profileService
              .getAdopterProfile(id)
              .subscribe({
                next: (obj) => {
                  this.getPostSubscription = this.petPostService
                    .getNearByPet(obj.location)
                    .subscribe({
                      next: (val: any) => {
                        console.log('adoptr', val);
                        this.petPosts = val;
                      },
                    });
                },
              });
          } else if (this.authService.hasAccess(environment.veterinaryDoctor)) {
            this.userSubscription = this.profileService
              .getVeterinaryDoctorProfile(id)
              .subscribe({
                next: (obj) => {
                  this.getPostSubscription = this.petPostService
                    .getNearByPet(obj.location)
                    .subscribe({
                      next: (val: any) => {
                        console.log('veti', val);
                        this.petPosts = val;
                      },
                    });
                },
              });
          }
        },
      });
    } else {
      this.getPostSubscription = this.petPostService.getLatestPost().subscribe({
        next: (val) => {
          this.petPosts = val;
        },
      });
    }

    this.getSearchInput();
  }
  getSearchInput() {
    this.searchSubscription = this.searchInput
      .categorySearchInput(this.inputValue)
      .subscribe({
        next: (val) => {
          this.categories = val;
          console.log(val);
        },
      });
  }

  navigate(id: string) {
    console.log(id);

    this.route.navigate(['pet/pet-profile', id]);
  }

  search() {
    this.route.navigate(['pet/search', this.inputValue]);
  }

  ngOnDestory() {
    this.idSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
    this.getPostSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }
}
