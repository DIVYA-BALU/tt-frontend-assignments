import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Article } from 'src/app/model/ArticleDTO';
import { CreateArticleService } from './create-article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss'],
})
export class CreateArticleComponent {
  categories: string[] = [
    'ENTERTAINMENT',
    'SPORTS',
    'POLITICS',
    'INTERNATIONAL',
    'LOCAL',
    'BUSINESS',
    'JOURNALISM',
    'HARD_NEWS',
    'SOFT_NEWS',
    'SCIENCE_AND_TECHNOLOGY',
    'HEALTH',
    'EDUCATION',
  ];

  editorConfig = {
    base_url: '/tinymce',
    suffix: '.min',
    plugins: 'lists link image table wordcount',
  };

  status: string = '';

  articleForm!: FormGroup;

  article!: Article;
  files: File[] = [];

  constructor(private createArticleService: CreateArticleService) {}

  ngOnInit() {
    this.articleForm = new FormGroup({
      articleUid: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      images: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.article = this.articleForm.value;
    this.article.images = this.files;
    this.createArticleService.createArticle(this.article).subscribe(
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
      if ((this.articleForm.controls['articleUid'].value) && (e.target.files[i].name).includes(this.articleForm.controls['articleUid'].value)) {
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
