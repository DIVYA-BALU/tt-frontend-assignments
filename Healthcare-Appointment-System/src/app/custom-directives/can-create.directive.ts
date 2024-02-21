import { Directive, ElementRef } from '@angular/core';
import { PermissionService } from 'src/app/service/permission.service';

@Directive({
  selector: '[appCanCreate]'
})
export class CanCreateDirective {

  constructor(private el: ElementRef, private permissionService: PermissionService) {
  }
  ngOnInit() {
    const permissions = this.permissionService.permissions;
    this.el.nativeElement.hidden = !(permissions.includes('appointment_edit'));
  }



}
