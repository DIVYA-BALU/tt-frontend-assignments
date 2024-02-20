import { Component } from '@angular/core';
import { SearchPageService } from '../search-page/search-page.service';
import { Router } from '@angular/router';
import { CourseDTO } from '../models/course-dto';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
})
export class HomeHeaderComponent {
  search: string = '';

  logged: boolean = false;
  instructor: boolean = false;

  constructor(
    private searchPageService: SearchPageService,
    private route: Router
  ) {}

  ngDoCheck() {
    if (localStorage.getItem('isLoggedIn') === 'valid') {
      this.logged = true;
    }

    if (localStorage.getItem('isLoggedIn') === 'inValid') {
      this.logged = false;
    }

    if (localStorage.getItem('instructor') === 'true') {
      this.instructor = true;
    }

    if (localStorage.getItem('instructor') === 'false') {
      this.instructor = false;
    }
  }

  // courses: CourseDTO[] = [];
  // timer: any;

  // searchedCourses() {
  //   this.route.navigate(['/search']);

  //   clearTimeout(this.timer);
  //   this.timer = setTimeout(() => {

  //     this.searchPageService.search(this.search).subscribe((data: CourseDTO[]) => {
  //       if (data.length > 0) {
  //         this.courses = data;
  //       } else {
  //         this.courses = [];
  //       }
  //     });
  //   }, 1000);
  // }

  timer: any;

  entered() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.searchPageService.setValue(this.search);
    }, 1000);
    
    this.route.navigate(['/search']);
  }
}
