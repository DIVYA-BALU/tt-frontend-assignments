import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/model/News';
import { DailyNewsService } from './daily-news.service';

@Component({
  selector: 'app-daily-news',
  templateUrl: './daily-news.component.html',
  styleUrls: ['./daily-news.component.scss']
})
export class DailyNewsComponent implements OnInit{

  newsContents!: News[];

  constructor(private dailynewsService: DailyNewsService){}

  ngOnInit(){
    this.getDailyNews();
  }

  getDailyNews(){
    this.dailynewsService.getDailyNews().subscribe( (data) => {
      this.newsContents = data;
      console.log(this.newsContents);
      
    })
  }
}
