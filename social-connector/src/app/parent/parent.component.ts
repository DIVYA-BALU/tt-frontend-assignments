import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent  {
  // @ContentChild("childElement") childElement : ElementRef | null = null;
  // ngAfterContentInit(){
  //   console.log(this.childElement?.nativeElement);
    
  // }

  constructor(private homeService:HomeService){}

  ngOnInit(){
    this.homeService.replayData.next("Data 1");
    this.homeService.replayData.next("Data 2");
    this.homeService.replayData.next("Data 3");
    this.homeService.replayData.next("Data 4");
    this.homeService.replayData.next("Data 5");

    this.homeService.replaySubject.subscribe({
      next: (response) => {
        console.log("parent Component ", response);       
      }
    })
  }
}
