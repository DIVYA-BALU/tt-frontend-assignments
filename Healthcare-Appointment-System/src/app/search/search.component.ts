import { Component, OnInit } from '@angular/core';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap, timeInterval } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private searchService: SearchService) { }

  time!: any;
  search(searchValue: string) {
    console.log(searchValue, typeof searchValue);

    clearInterval(this.time);
    this.time = setTimeout(() => {
      if (searchValue === "") {
        this.getDetails("");
      }
      else
        this.getDetails(searchValue);
    }, 500);

  }

  getDetails(text: string) {
    this.searchService.search(text);
  }

  getValue(event: Event): string {
    // console.log(event);
    return (event.target as HTMLInputElement).value;
  }

}
