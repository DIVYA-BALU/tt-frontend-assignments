import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { ShortReads } from 'src/app/model/ShortReads';
import { Article } from 'src/app/model/Article';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  images: string[] = ['/assets/image1.jpg', '/assets/image2.jpg', '/assets/image3.jpg', '/assets/image4.jpg', '/assets/image5.jpg'];
  currentIndex: number = 0;

  shortReads: ShortReads[] = [];
  articles: Article[] = [];

  constructor(private homeService: HomeService, private route: Router) {}

  ngOnInit(){
    this.getShortReads(0, 2);
    this.getArticle(0, 2);
  }
 
  getShortReads(pageIndex: number, pageSize: number){
    this.homeService.getShortReads(pageIndex, pageSize).subscribe( (data) => {
      this.shortReads = data.content;
    })
  }

  getArticle(pageIndex: number, pageSize: number){
    this.homeService.getArticle(pageIndex, pageSize).subscribe( (data) => {
      this.articles = data.content;
    })
  }

  onClick(){
    this.route.navigate(['/user/form']);
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
