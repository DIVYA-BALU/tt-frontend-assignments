import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-instructor',
  templateUrl: './instructor.component.html',
  styleUrls: ['./instructor.component.scss'],
})
export class InstructorComponent {
  create: boolean = false;
  buttonClick: boolean = false;

  courseForm!: FormGroup;

  ngOnInit() {
    this.courseForm = new FormGroup({
      courseId: new FormControl(''),
      courseName: new FormControl(''),
      amount: new FormControl(0.0),
      breifDescription: new FormControl(''),
      description: new FormControl(''),
      image: new FormControl(''),
      modules: new FormArray([
        new FormGroup({
          title: new FormControl(''),
          duration: new FormControl(0),
          level: new FormControl(''),
          subModules: new FormArray([
            new FormGroup({
              subTitle: new FormControl(''),
              video: new FormControl(''),
              subDuration: new FormControl(''),
            }),
          ]),
        }),
      ]),
    });
  }

  createCourse() {
    localStorage.setItem('createCourse', 'true');
  }

  showDiv() {
    return localStorage.getItem('createCourse') === 'true';
  }

  onCreate() {
    this.buttonClick = true;
    localStorage.removeItem('createCourse');
    // console.log(this.courseForm.controls);
    this.courseForm.reset();

    while (this.getModules().length > 1) {
      this.getModules().removeAt(this.getModules().length - 1);
    }

    while (this.subModules(0).length > 1) {
      this.subModules(0).removeAt(this.subModules(0).length - 1);
    }
  }

  removeModule(index: number) {
    this.getModules().removeAt(index);
  }

  removeSubModule(index: number, j: number) {
    this.subModules(index).removeAt(j);
  }

  getModules(): FormArray {
    return <FormArray>this.courseForm.get('modules');
  }

  subModules(index: number): FormArray {
    return <FormArray>this.getModules().at(index).get('subModules');
  }

  addModule() {
    this.getModules().push(
      new FormGroup({
        title: new FormControl(''),
        duration: new FormControl(0),
        level: new FormControl(''),
        subModules: new FormArray([
          new FormGroup({
            subTitle: new FormControl(''),
            video: new FormControl(''),
            subDuration: new FormControl(''),
          }),
        ]),
      })
    );
    // console.log(this.getModules());
  }

  addSubModule(index: number) {
    this.subModules(index).push(
      new FormGroup({
        subTitle: new FormControl(''),
        video: new FormControl(''),
        subDuration: new FormControl(''),
      })
    );
    // console.log(this.subModules(index));
  }
}
