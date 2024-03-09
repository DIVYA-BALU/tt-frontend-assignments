import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SearchInputService } from '../service/search-input.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { PetPost } from '../models/models';
import { Subject, Subscription, debounce, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchInputService
  ) {}

  category: string = '';
  breed: string = '';
  gender: string = 'Both';
  isInfected: string = '';
  city: string = '';
  page: number = 0;
  categories: string[] = [];
  breeds: string[] = [];
  genders: string[] = ['male', 'female', 'Both'];
  cites: string[] = [];

  petPosts: PetPost[] = [];
  isLoading: boolean = false;
  id: string = '';

  private loadSubscription: Subscription = new Subscription();
  private searchUpdateSubscription: Subscription = new Subscription();
  private citySubscription: Subscription = new Subscription();
  private breedSearchSubscription: Subscription = new Subscription();
  private categorySearchSubscription: Subscription = new Subscription();
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
    this.page++;

    this.loadSubscription = this.searchService
      .searchedPets(
        this.category,
        this.breed,
        this.gender === 'Both' ? '' : this.gender,
        this.isInfected,
        this.city,
        this.page
      )
      .subscribe({
        next: (val) => {
          this.petPosts = [...this.petPosts, ...val];
        },
      });
  }

  search() {
    this.page = 0;
    this.searchUpdateSubscription = this.searchService
      .searchedPets(
        this.category,
        this.breed,
        this.gender === 'Both' ? '' : this.gender,
        this.isInfected,
        this.city,
        this.page
      )
      .subscribe({
        next: (val) => {
          this.petPosts = val;
        },
      });
  }

  categorySub: Subject<string> = new Subject<string>();
  citySub: Subject<string> = new Subject<string>();
  breedSub: Subject<string> = new Subject<string>();

  getCategory() {
    this.categorySub.next(this.category);
    this.categorySearchSubscription = this.categorySub
      .pipe(
        debounceTime(500),
        switchMap(() => {
          return this.searchService.categorySearchInput(this.category);
        })
      )
      .subscribe({
        next: (val) => {
          this.categories = val;
        },
      });
  }

  getBreed() {
    this.breedSub.next(this.breed);
    this.breedSearchSubscription = this.breedSub
      .pipe(
        debounceTime(500),
        switchMap(() => {
          return this.searchService.breadSearchInput(this.category, this.breed);
        })
      )
      .subscribe({
        next: (val) => {
          this.breeds = val;
        },
      });
  }
  getCity() {
    this.citySub.next(this.city);
    this.citySubscription = this.citySub
      .pipe(
        debounceTime(500),
        switchMap(() => {
          return this.searchService.citySearchInput(this.city);
        })
      )
      .subscribe({
        next: (val) => {
          this.cites = val;
        },
      });
  }

  viewProfile(id: string) {
    this.router.navigate(['pet/pet-profile', id]);
  }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    this.categories = [this.category];
    this.search();
  }

  ngOnDestroy() {
    this.loadSubscription.unsubscribe();
    this.searchUpdateSubscription.unsubscribe();
    this.citySubscription.unsubscribe();
    this.breedSearchSubscription.unsubscribe();
    this.categorySearchSubscription.unsubscribe();
  }
}
