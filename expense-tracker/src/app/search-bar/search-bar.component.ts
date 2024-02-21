import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private commonService : CommonService){}
  inputVal : string = '';

  debounce() {
    let timer;
    clearTimeout(timer);
    timer = setTimeout(() => {
      this.saveInput();
    }, 3000);
  }
  saveInput() {
    this.commonService.setSearchBarData(this.inputVal);
  }

  givenInputVal(event : Event){
    console.log(event);
    this.inputVal = (event.target as HTMLInputElement).value;
    // console.log(this.inputVal);
    this.debounce();
  }
}
