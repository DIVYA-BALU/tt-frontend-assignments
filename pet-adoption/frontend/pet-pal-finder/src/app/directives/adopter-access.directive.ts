import { Directive, ElementRef } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { environment } from 'src/environments/environment';

@Directive({
  selector: '[appAdopterAccess]',
  standalone:true
})
export class AdopterAccessDirective {

  constructor(private el:ElementRef, private authService:AuthService) { }

  ngOnInit(){
    
    if(!this.authService.hasAccess(environment.adopter)){
    this.el.nativeElement.style.display='none';
    }
  }

}
