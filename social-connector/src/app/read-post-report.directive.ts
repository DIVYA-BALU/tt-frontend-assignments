import { Directive, ElementRef, Input } from '@angular/core';
import { LoginService } from './service/login.service';

@Directive({
  selector: '[appReadPostReport]'
})
export class ReadPostReportDirective {
  @Input() access:string="";

  constructor(private el:ElementRef, private loginService:LoginService) { }

  ngOnInit(){
    console.log("inside directive", this.access);
    this.loginService.permission.subscribe({next:(val) => {
      console.log("shared variable",val);
      const acc = val.includes(this.access)
    //   let access = val.filter((permissionObj:string) => {
    //   return permissionObj === "READ_POST_REPORT"
    // }).length > 0
    // console.log(access);
    
    if(!acc){
      console.log("Access denied");
      
      this.el.nativeElement.style.display = "none";
    }
    }})
    
  }

}
