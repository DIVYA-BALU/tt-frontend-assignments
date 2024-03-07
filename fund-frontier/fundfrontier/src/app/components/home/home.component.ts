import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Successstory } from 'src/app/model/successstory';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private studentService: StudentService,private router:Router) {
    this.getStory()
  }

  story!:Successstory ;
  getStory() {
    this.studentService.getstories(0,1).subscribe((response) => {
      console.log(response);      
      this.story = response.content[0];
    })
  }

  getTestimonials() {
   this.router.navigate(['header/testimonial']);  
}
}   
