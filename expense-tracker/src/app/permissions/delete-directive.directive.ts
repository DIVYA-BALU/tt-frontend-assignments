import { Directive, ElementRef, inject } from '@angular/core';
import { CommonServiceService } from './common-service.service';

@Directive({
  selector: '[appDeleteDirective]'
})
export class DeleteDirectiveDirective {

  constructor( private el : ElementRef, private commonService : CommonServiceService) { }

  ngOnInit(){
    this.el.nativeElement.hidden = !this.commonService.permissions.includes("delete_transaction");
  }
}
