import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { AuthService } from '../service/auth.service';
import { PetPostComponent } from '../pet-post/pet-post.component';
import { RecivedAdoptionRequestComponent } from '../recived-adoption-request/recived-adoption-request.component';
import { AcceptedAdoptionRequestComponent } from '../accepted-adoption-request/accepted-adoption-request.component';

@Component({
  selector: 'app-organization',
  standalone: true,
  imports: [CommonModule,MatTabsModule,PetPostComponent,RecivedAdoptionRequestComponent,AcceptedAdoptionRequestComponent],
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent {

  constructor(private authService:AuthService){}

  ngOnInit(){
    this.authService.sharedId$.subscribe({next:(id)=>{
      console.log(id);
    }})
  }
}
