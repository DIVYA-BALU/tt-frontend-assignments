import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserNewsDTO } from 'src/app/model/UserNewsDTO';
import { FormService } from './form.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  newsForm!: FormGroup;
  durationInSeconds = 5;
  files: File[] = [];
  subscription: Subscription = new Subscription();

  news!: UserNewsDTO;

  constructor(private formService: FormService) {}

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'lists link image table wordcount',
  };

  ngOnInit(): void {
    this.newsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNo: new FormControl('', Validators.required),
      images: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.news = this.newsForm.value;
    this.news.images = this.files;
    this.subscription = this.formService.createMyNews(this.news).subscribe(
      (data) => {
        Swal.fire({
          title: 'Thank you!',
          text: 'Your form has been submitted successfully!',
          icon: 'success',
        });
        this.newsForm = new FormGroup({
          name: new FormControl('', Validators.required),
          email: new FormControl('', Validators.required),
          phoneNo: new FormControl('', Validators.required),
          content: new FormControl('', Validators.required),
        });
        this.files = [];
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    );
  }

  imgError: string = '';

  uploadImages(e: any) {
    for (let i = 0; i < e.target.files.length; i++) {
      if (
        e.target.files[i].name.includes(
          new Date().toLocaleDateString('en-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
        )
      ) {
        this.files.push(e.target.files[i]);
        this.imgError = '';
      } else {
        this.imgError = 'error';
      }
    }
  }

  remove(index: number) {
    this.files.splice(index, 1);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
