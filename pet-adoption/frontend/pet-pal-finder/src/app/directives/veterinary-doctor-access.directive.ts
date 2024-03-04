import { Directive, ElementRef } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appVeterinaryDoctorAccess]',
  standalone:true
})
export class VeterinaryDoctorAccessDirective {

  constructor(private el:ElementRef, private authService:AuthService) { }

  ngOnInit(){
    
    if(!this.authService.hasAccess(environment.veterinaryDoctor)){
    this.el.nativeElement.style.display='none';
    }
  }

}
