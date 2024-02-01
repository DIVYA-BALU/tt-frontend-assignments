import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from "src/app/child/child.component";
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // @ViewChild(ChildComponent) child:any;

}
