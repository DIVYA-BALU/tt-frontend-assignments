import { Component } from '@angular/core';
import { News } from 'src/app/model/News';
import { BreakingNewsService } from './breaking-news.service';

@Component({
  selector: 'app-breaking-news',
  templateUrl: './breaking-news.component.html',
  styleUrls: ['./breaking-news.component.scss']
})
export class BreakingNewsComponent {

  newsContents!: News[];

  constructor(private breakingnewsService: BreakingNewsService){}

  ngOnInit(){
    this.showSpinner();
    this.getBreakingNews();
  }

  getBreakingNews(){
    this.breakingnewsService.getBreakingNews().subscribe( (data) => {
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
