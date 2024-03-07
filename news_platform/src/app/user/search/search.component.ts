import { Component } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { SearchService } from './search.service';
import { News } from 'src/app/model/News';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  value: string = '';

  news: News[] = [];

  constructor(private sharedService: SharedServiceService, private searchService: SearchService){
    sharedService.searchValueData.subscribe( (data) => {
      this.value = data;  
      if (this.value) {
        this.search(this.value);
      }
    });
  }

  search(value: string){
    this.searchService.getSearchValue(value).subscribe( (data) => {
      this.news = data;
      console.log(this.news);
    })
  }

}
