import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization, VeterinaryDoctor } from '../models/models';

@Component({
  selector: 'app-report-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent {

  @Input() request?:Organization | VeterinaryDoctor;
  @Input() type?:string;

  ngOnInit(){
    console.log(this.request,this.type);
    
  }
}
