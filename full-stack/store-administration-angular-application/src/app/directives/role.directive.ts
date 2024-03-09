import { Directive, ElementRef, Input } from '@angular/core';
import { UserDetailsService } from '../core/services/user-details.service';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  @Input() requiredRole: string = '';

constructor(
    private el: ElementRef,
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit() {
    const permissionsSubscription = this.userDetailsService.loginResponseSubject$.subscribe({
      next: (loginResponse) => this.checkRole(loginResponse.role.name, this.requiredRole)
    })

  }

  checkRole(role: string, requiredRole: string) {    
    if (role !== requiredRole) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
