import { Directive, ElementRef } from '@angular/core';
import { PermissionService } from '../service/permission.service';

@Directive({
  selector: '[appCanBook]'
})
export class CanBookDirective {

  constructor(private el: ElementRef, private permissionService: PermissionService) {
  }
  ngOnInit() {
    const permissions = this.permissionService.permissions;
    // console.log(permissions);
    console.log(permissions);
    this.el.nativeElement.hidden = !(permissions.includes("doctor_book"));
  }
}
