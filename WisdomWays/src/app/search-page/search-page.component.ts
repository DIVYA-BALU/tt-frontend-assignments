import { Component, Input, OnInit } from '@angular/core';
import { SearchPageService } from './search-page.service';
import { CourseDTO } from '../models/course-dto';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  courses: CourseDTO[] = [];
  status: string = '';

  value: string = '';

  subscription1$: Subscription = new Subscription;

  constructor(private searchPageService: SearchPageService) {}

  ngOnInit() {
    this.subscription1$ = this.searchPageService.value$.subscribe((data) => {
      if (data) {
        this.value = data;
        this.searchedCourses(this.value);
      }
    });
  }

  ngOnDestroy() {
    if (this.subscription1$) {
      console.log('destroyed');
      
      this.subscription1$.unsubscribe();
    }
  }

  searchedCourses(val: string) {
    this.searchPageService.search(val).subscribe((data: CourseDTO[]) => {
      if (data.length > 0) {
        this.courses = data;
      } else {
        this.courses = [];
        this.status = 'No content found!!!';
      }
    });
  }
}
