import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements AfterContentInit{
  @ContentChild("childElement") childElement : ElementRef | null = null;
  ngAfterContentInit(){
    console.log(this.childElement?.nativeElement);
    this.childElement!.nativeElement.style.color = "red";
  }

  constructor(private homeService:HomeService){}
  ngOnInit(){
    this.homeService.replaySubject.subscribe({
      next: (response) => {
        console.log("child Component ", response);       
      }
    })
  }
}
