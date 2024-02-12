import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TeachService } from './teach.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teach',
  templateUrl: './teach.component.html',
  styleUrls: ['./teach.component.scss']
})
export class TeachComponent {

  constructor(private teachService: TeachService, private route: Router){}

  isInstructor: boolean = false;

  instructorStatus: string = "";

  onTeach(teachForm: NgForm) {
    console.log(teachForm);
     this.instructorStatus = this.teachService.addInstructor();
     this.route.navigate(['/instructor']);
  }

  isInstructorApproved(){
    this.isInstructor = this.teachService.isInstructor();
  }

}
