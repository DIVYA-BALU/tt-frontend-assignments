import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Successstory } from 'src/app/model/successstory';
import { LoginService } from 'src/app/services/login.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-storycreation',
  templateUrl: './storycreation.component.html',
  styleUrls: ['./storycreation.component.scss']
})
export class StorycreationComponent {

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private loginService: LoginService
  ) { }

  storyForm!: FormGroup;
  

  email: string = '';

  ngOnInit() {
    this.loginService.getuserEmail().subscribe(
      (data) => {
        this.email = data;        
      }
    )
    this.storyForm = this.formBuilder.group(
      {
        email : ['',Validators.required],
        story : ['', Validators.required]
      }
    )
  }

  story: Successstory = {
    _id: '',
    email: '',
    story: '',
  };

  onSubmit() {
    console.log(this.storyForm.value);
    this.storyForm.value.email = this.email;
    this.studentService.addStory(this.storyForm.value).subscribe(
      (response) => {
        this.story = response;
      }
    )
  }

}
