import { Component, OnDestroy } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service/shared-service.service';
import { SearchService } from './search.service';
import { News } from 'src/app/model/News';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  value: string = '';
  subscriptions: Subscription[] = [];
  news: News[] = [];

  constructor(
    private sharedService: SharedServiceService,
    private searchService: SearchService
  ) {
    this.subscriptions.push(
      sharedService.searchValueData.subscribe((data) => {
        this.value = data;
        if (this.value) {
          this.search(this.value);
        }
      })
    );
  }

  search(value: string) {
    this.subscriptions.push(
      this.searchService.getSearchValue(value).subscribe((data) => {
        this.news = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((data) => {
      data.unsubscribe();
    });
  }
}
