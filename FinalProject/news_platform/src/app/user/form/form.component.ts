import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserNewsDTO } from 'src/app/model/user-news-dto';
import { FormService } from './form.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessSnackBarComponent } from 'src/app/success-snack-bar/success-snack-bar.component';
import { FailureSnackBarComponent } from 'src/app/failure-snack-bar/failure-snack-bar.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  newsForm!: FormGroup;
  durationInSeconds = 5;
  files: File[] = [];

  news!: UserNewsDTO;

  constructor(private formService: FormService, private _snackBar: MatSnackBar) {}

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

  onSubmit(){
    this.news = this.newsForm.value;
    this.news.images = this.files;
    this.formService.createMyNews(this.news).subscribe( (data) => {
      // this.status = data;
      this.openSuccessSnackBar();
    },
    (error) => {
      this.openFailureSnackBar();
    })
  }

  imgError: string = '';

  uploadImages(e: any){
    for (let i = 0; i < e.target.files.length; i++) {
      if ((e.target.files[i].name).includes(new Date().toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' }))) {
        this.files.push(e.target.files[i]);
        this.imgError = '';
      }else{
        this.imgError = 'error';
      }
    }
  }

  remove(index: number) {
    this.files.splice(index, 1);
    console.log(this.files);
  }

  openSuccessSnackBar() {
    this._snackBar.openFromComponent(SuccessSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  openFailureSnackBar() {
    this._snackBar.openFromComponent(FailureSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}