import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsDTO } from 'src/app/model/New';
import { CreateNewsService } from '../create-news/create-news.service';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.scss']
})
export class BreakingNewsComponent {

  categories: string[] = [
    'BREAKING NEWS',
  ];

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'lists link image table wordcount',
  };

  status: string = '';

  newsForm!: FormGroup;

  news!: NewsDTO;
  files: File[] = [];

  constructor(private createNewsService: CreateNewsService) {}

  ngOnInit() {
    this.newsForm = new FormGroup({
      newsUid: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      synopsis: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      images: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.news = this.newsForm.value;
    this.news.images = this.files;
    this.createNewsService.createNews(this.news).subscribe(
      (data) => {
        this.status = data;
      },
      (error) => {
        this.status = error.error;
      }
    );
  }

  imgError: string = '';

  uploadImages(e: any) {
    for (let i = 0; i < e.target.files.length; i++) {
      if ((this.newsForm.controls['newsUid'].value) && (e.target.files[i].name).includes(this.newsForm.controls['newsUid'].value)) {
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
}
