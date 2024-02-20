import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { __values } from 'tslib';
import { CourseDisplayService } from './course-display.service';
import { Course } from '../models/Course';
import { Modules } from '../models/Modules';

@Component({
  selector: 'app-course-display',
  templateUrl: './course-display.component.html',
  styleUrls: ['./course-display.component.scss'],
})
export class CourseDisplayComponent {
  courseID: string = '';

  course: Course = {
  courseUid: '',
	courseName: '',
	briefDescription: '',
	description: '',
	modules: [],
	amount: 0,
	review: [],
	published: new Date(),
	totalEnrollments: 0,
	maxEnrollments: 0,
	instructor: {
    name: '',
    bio: '',
    tutorialRatings: 0,
    totalCourse: 0,
    students: 0
  },
	assingment: {
    title: '',
    questions: [],
    duration: 0
  }
  };

  constructor(
    private route: ActivatedRoute,
    private courseDisplayServive: CourseDisplayService
  ) {
    route.params.subscribe(
      (__values) => (this.courseID = __values['courseUid'])
    );
    this.getCourse();
  }

  getCourse() {
    this.courseDisplayServive
      .getCourseById(this.courseID)
      .subscribe(data => {
        this.course = data;
        console.log(data);       
      });
  }
}
