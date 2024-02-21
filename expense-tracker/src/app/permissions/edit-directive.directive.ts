import { Directive, ElementRef } from '@angular/core';
import { CommonServiceService } from './common-service.service';

@Directive({
  selector: '[appEditDirective]'
})
export class EditDirectiveDirective {

  constructor(private commonService:CommonServiceService, private el : ElementRef) { }
  ngOnInit(){
    this.el.nativeElement.hidden = !this.commonService.permissions.includes("update_transaction");
  }
}
