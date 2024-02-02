import { Component, Input, Output, EventEmitter , OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit{
  @Input() movieList: Array<string> = [];

  @Output() movieSelectedEventEmitter =  new EventEmitter<string>();

  movieSelected(selectedMovie: string) { 
    this.movieSelectedEventEmitter.emit(selectedMovie);
  }

  constructor() { }
  ngOnInit(): void {
      
  }
}
