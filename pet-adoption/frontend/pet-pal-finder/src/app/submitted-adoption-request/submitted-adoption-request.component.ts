import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth.service';
import { AdoptionService } from '../service/adoption.service';
import { AdoptionDetail } from '../models/models';

@Component({
  selector: 'app-submitted-adoption-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submitted-adoption-request.component.html',
  styleUrls: ['./submitted-adoption-request.component.scss']
})
export class SubmittedAdoptionRequestComponent {

  constructor(private authService:AuthService,private adoptionService:AdoptionService){}

  adoptionStatuses:AdoptionDetail[] =[]

  ngOnInit(){
    this.authService.sharedId$.subscribe({
      next: (id) => {
        this.adoptionService.getAdoptionStatus(id).subscribe({
          next: (val) => {
           this.adoptionStatuses = val
            
          }
        })
      }
    })
  }
}
