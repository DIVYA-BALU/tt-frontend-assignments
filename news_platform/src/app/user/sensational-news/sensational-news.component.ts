import { Component } from '@angular/core';
import { News } from 'src/app/model/News';
import { SensationalNewsService } from './sensational-news.service';

@Component({
  selector: 'app-sensational-news',
  templateUrl: './sensational-news.component.html',
  styleUrls: ['./sensational-news.component.scss']
})
export class SensationalNewsComponent {

  newsContents!: News[];

  constructor(private sensationalnewsService: SensationalNewsService){}

  ngOnInit(){
    this.showSpinner();
    this.getSensationalNews();
  }

  getSensationalNews(){
    this.sensationalnewsService.getSensationalNews().subscribe( (data) => {
      this.newsContents = data;
    })
  }

  spinner!: boolean;

  showSpinner(){
    this.spinner = true;
    setTimeout(() => {
      this.spinner = false;
    }, 2000);
  }
}
