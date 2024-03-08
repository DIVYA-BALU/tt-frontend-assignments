import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewsDTO } from 'src/app/model/NewDTO';
import { CreateNewsService } from '../create-news/create-news.service';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';

@Component({
  selector: 'app-sensational-news',
  templateUrl: './sensational-news.component.html',
  styleUrls: ['./sensational-news.component.scss']
})
export class SensationalNewsComponent {

  categories: string[] = [
    'SENSATIONAL NEWS',
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

  constructor(private createNewsService: CreateNewsService, private sharedService: SharedServiceService) {}

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
        this.sharedService.setBadge(true);
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
