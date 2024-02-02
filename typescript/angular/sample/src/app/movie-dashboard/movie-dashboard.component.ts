import { Component } from '@angular/core';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.scss']
})
export class MovieDashboardComponent {

  str: string = '';
  value: string = '';

  disp() {
    this.str = 'Hello World';
  }

  num(value: string) {
    this.value = value;
  }

  myFavoriteMovies = ['Encanto',
    'Spider-Man: No Way Home',
    "Harry Potter and the Sorcerer's Stone"];

  selectedMovieToWatch(data: string) {
    alert(data);
  }


}
