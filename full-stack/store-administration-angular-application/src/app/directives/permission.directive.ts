import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserDetailsService } from '../core/services/user-details.service';
import { LoginResponse, Permission } from '../core/models/API.model';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective {

  private permissionsSubscription: Subscription = new Subscription;

  @Input() requiredPermission: string = '';

  constructor(
    private el: ElementRef,
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit() {
    this.permissionsSubscription = this.userDetailsService.loginResponseSubject$.subscribe({
      next: (loginResponse) => this.checkPermission(loginResponse, this.requiredPermission)
    })
  }

  checkPermission(loginResponse: LoginResponse, requiredPermission: string) {        
    const permissions: Permission[] = loginResponse.permissions.concat(loginResponse.role?.permissions ?? []);    
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
