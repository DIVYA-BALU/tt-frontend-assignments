import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Organization, VeterinaryDoctor } from '../models/models';

@Component({
  selector: 'app-request-registration-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './request-registration-list.component.html',
  styleUrls: ['./request-registration-list.component.scss']
})
export class RequestRegistrationListComponent {
  @Input() request?:Organization | VeterinaryDoctor;
  @Input() type?:string;

  ngOnInit(){
    console.log(this.request,this.type);
    
  }
}
