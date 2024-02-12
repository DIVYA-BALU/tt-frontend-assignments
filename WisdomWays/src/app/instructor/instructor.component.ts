import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss'],
})
export class InstructorComponent {
  create: boolean = false;
  buttonClick: boolean = false;

  courseForm: FormGroup = new FormGroup ({
    courseId: new FormControl(''),
    courseName: new FormControl(''),
    amount:  new FormControl(0.0),
    breifDescription: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl(''),
    // modules: new FormControl('')
  });

  // courseId: string = '';
  // courseName: string = '';
  // amount: number = 0.0;
  // breifDescription: string = '';
  // description: string = '';
  // image: string = '';
  // modules = [
  //   {
  //     title: '',
  //     duration: 0,
  //     level: '',
  //     submodule: {
  //       title: '',
  //       videoUrl: '',
  //       duration: 0,
  //     },
  //   },
  // ];

  createCourse() {
    localStorage.setItem('createCourse', 'true');
  }

  showDiv() {
    return localStorage.getItem('createCourse') === 'true';
  }

  onCreate() {
    this.buttonClick = true;
    localStorage.removeItem('createCourse');
    console.log(this.courseForm.value);
    
  }

  addModule() {
  //   e.preventDefault();
  //   this.modules.push({
  //     title: '',
  //     duration: 0,
  //     level: '',
  //     submodule: {
  //       title: '',
  //       videoUrl: '',
  //       duration: 0,
  //     },
  //   });
   }
}
