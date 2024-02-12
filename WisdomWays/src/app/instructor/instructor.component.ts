import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss'],
})
export class InstructorComponent {
  create: boolean = false;
  buttonClick: boolean = false;

  courseId: string = '';
  courseName: string = '';
  amount: number = 0.0;
  breifDescription: string = '';
  description: string = '';
  image: string = '';
  modules = [
    {
      title: '',
      duration: 0,
      level: '',
      submodule: {
        title: "",
        videoUrl: '',
        duration: 0
      }
    },
  ];

  createCourse() {
    localStorage.setItem('createCourse', 'true');
  }

  showDiv() {
    return localStorage.getItem('createCourse') === 'true';
  }

  onCreate(courseForm: NgForm) {
    console.log(courseForm);
    this.buttonClick = true;
    localStorage.removeItem('createCourse');
  }

  addModule(e: Event) {
    e.preventDefault();
    this.modules.push({
      title: '',
      duration: 0,
      level: '',
      submodule: {
        title: "",
        videoUrl: '',
        duration: 0
      }
    });
  }
}
