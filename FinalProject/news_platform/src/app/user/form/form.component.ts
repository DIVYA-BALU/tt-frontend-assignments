import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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

  @ViewChild('button') button!: ElementRef<HTMLButtonElement>;

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'lists link image table wordcount',
  };

  ngOnInit(): void {
    this.newsForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phoneNo: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
      content: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.news = this.newsForm.value;
    if (this.files) {
      this.news.images = this.files;
    }
    this.button.nativeElement.disabled = true;
    this.subscription = this.formService.createMyNews(this.news).subscribe(
      (data) => {
        Swal.fire({
          title: 'Thank you!',
          text: 'Your form has been submitted successfully!',
          icon: 'success',
        }).then(() => {
          this.newsForm.reset();
          this.files = [];
        });
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        }).then(() => {
          this.button.nativeElement.disabled = false;
        });
      }
    );
  }

  uploadImages(e: any) {
    for (let i = 0; i < e.target.files.length; i++) {
      this.files.push(e.target.files[i]);
    }
  }

  remove(index: number) {
    this.files.splice(index, 1);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
