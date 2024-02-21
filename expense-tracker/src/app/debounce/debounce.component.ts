import { Component } from '@angular/core';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent {

  constructor() { }
  debounce() {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.saveInput();
    }, 3000);
  }
  saveInput() {
    console.log('Saving data');
  } 
}
