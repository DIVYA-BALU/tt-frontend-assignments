import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptionDetail } from '../models/models';
import { AdoptionService } from '../service/adoption.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-recived-adoption-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recived-adoption-request.component.html',
  styleUrls: ['./recived-adoption-request.component.scss']
})
export class RecivedAdoptionRequestComponent {


  constructor(private adoptionService:AdoptionService,private authService:AuthService){}

  adoptionDetails:AdoptionDetail [] = [];
  isLoading: boolean = false;
  currentPage: number = 0;
  id:string='';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const documentHeight = document.body.scrollHeight;
    if (scrollPosition + windowHeight >= documentHeight && !this.isLoading) {
      this.loadData();
    }
  }

  loadData(){
    this.isLoading = true;
    this.adoptionService.getAdoptionStatusOfPoster(this.id,'initiated',this.currentPage).subscribe({
      next: (val) => {
        this.adoptionDetails = [...this.adoptionDetails, ...val]; 
        this.isLoading = false;
        this.currentPage++;
        console.log(this.adoptionDetails);
        
      }
    })
  }

  updateAdoptionStatus(id: string,status: string) {
   this.adoptionService.updateAdoptionStatus(id,status).subscribe({
    next: (val) => {
      console.log(val);
      
    }
   })
    }

  ngOnInit(){
    this.authService.sharedId$.subscribe({
      next: (id) => {
        this.id = id;
        this.loadData()
      }
    })
  }
}
