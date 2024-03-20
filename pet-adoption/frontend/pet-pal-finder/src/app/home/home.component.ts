import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetPostService } from '../service/pet-post.service';
import { ProfileService } from '../service/profile.service';
import { Location, PetPost } from '../models/models';
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

  page: number = 0;
  id: string = '';
  location: Location = {
    doorNo: '',
    street: '',
    city: '',
    district: '',
    state: '',
    country: '',
  };
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

  loadData() {
    // if (this.authService.isAuthenticated()) {
    //   this.getPostSubscription = this.petPostService
    //     .getNearByPet(this.location, this.page)
    //     .subscribe({
    //       next: (val) => {
    //         this.petPosts = [...this.petPosts, ...val];
    //       },
    //     });
    // }else{
    this.getPostSubscription = this.petPostService
      .getLatestPost(this.page)
      .subscribe({
        next: (val) => {
          console.log(val);
          this.petPosts = [...this.petPosts, ...val];
        },
      });
    // }
    this.page++;
  }

  petPosts: PetPost[] = [];
  ngOnInit() {
    // if (this.authService.isAuthenticated()) {
    //   this.idSubscription = this.authService.sharedId$.subscribe({
    //     next: (id) => {
    //       this.id = id;
    //       if (this.authService.hasAccess(environment.adopter)) {
    //         this.userSubscription = this.profileService
    //           .getAdopterProfile(id)
    //           .subscribe({
    //             next: (obj) => {
    //               this.location = obj.location;
    //               this.loadData();
    //             },
    //           });
    //       } else if (this.authService.hasAccess(environment.veterinaryDoctor)) {
    //         this.userSubscription = this.profileService
    //           .getVeterinaryDoctorProfile(id)
    //           .subscribe({
    //             next: (obj) => {
    //               this.location = obj.location;
    //               this.loadData();
    //             },
    //           });
    //       }
    //     },
    //   });
    // } else {
    this.loadData();
    // }

    this.getSearchInput();
  }
  getSearchInput() {
    this.searchSubscription = this.searchInput
      .categorySearchInput(this.inputValue)
      .subscribe({
        next: (val) => {
          this.categories = val;
        },
      });
  }

  navigate(id: string) {
    this.route.navigate(['pet/pet-profile', id]);
  }

  search() {
    this.route.navigate(['pet/search', this.inputValue]);
  }

  ngOnDestroy() {
    this.idSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
    this.getPostSubscription.unsubscribe();
    this.searchSubscription.unsubscribe();
  }
}
