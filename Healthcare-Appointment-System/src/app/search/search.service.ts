import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  searchResult = new BehaviorSubject<any>([]);

  search(searchValue: string) {
    this.http.get<any>(environment.docUrl + `/getAllByName?search=${searchValue}`).subscribe({
      next: (data) => {
        this.searchResult.next(data);
      }
    });
  }

}
