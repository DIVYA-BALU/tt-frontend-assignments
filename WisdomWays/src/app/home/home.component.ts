import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { CourseDTO } from '../models/course-dto';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  courses: CourseDTO[] = [];

  constructor(private homeService: HomeService){
    this.getAllCourse();
  }

  getAllCourse(){
    this.homeService.getAllCourses().subscribe(data => {
      this.courses = data; 
      // console.log(data);
    }
    );
  }
}