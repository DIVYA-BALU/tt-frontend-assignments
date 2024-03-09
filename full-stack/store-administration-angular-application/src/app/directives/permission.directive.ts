import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserDetailsService } from '../core/services/user-details.service';
import { LoginResponse, Permission } from '../core/models/API.model';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {

  private permissionsSubscription: Subscription = new Subscription;
  private branchIdSubscription: Subscription = new Subscription;

  @Input() requiredPermission: string = '';

  constructor(
    private el: ElementRef,
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit() {
    const permissionsSubscription = this.userDetailsService.loginResponseSubject$.subscribe({
      next: (loginResponse) => this.checkPermission(loginResponse.permissions, this.requiredPermission)
    })
  }

  checkPermission(permissions: Permission[], requiredPermission: string) {
    if (!permissions.some(permission => permission.name === requiredPermission)) {
      this.el.nativeElement.style.display = 'none';
    }
  }

  ngOnDestroy() {

    if (this.permissionsSubscription) {
      this.permissionsSubscription.unsubscribe();
    }
  }
}
