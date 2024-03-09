import { Component } from '@angular/core';
import { Successstory } from 'src/app/model/successstory';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {

  pageNo: number = 0;

  constructor(private studentService: StudentService) {
    this.getStories(0, 3)
  }
  stories: Successstory[] = [];
  getStories(pageNo: number, pageSize: number) {
    this.studentService.getstories(pageNo, pageSize).subscribe((response) => {
      response.content.forEach(data => {
        this.stories.push(data);
      });
    })
  }

  loadMore() {
    this.getStories(++this.pageNo, 3)
  }


}
