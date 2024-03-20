import { Directive, ElementRef, Input } from '@angular/core';
import { UserDetailsService } from '../core/services/user-details.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appRole]'
})
export class RoleDirective {

  @Input() requiredRole: string = '';

  private loginResponseSubscription: Subscription = new Subscription;

constructor(
    private el: ElementRef,
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit() {
    this.loginResponseSubscription = this.userDetailsService.loginResponseSubject$.subscribe({
      next: (loginResponse) => this.checkRole(loginResponse.role.name, this.requiredRole)
    })

  }

  checkRole(role: string, requiredRole: string) {    
    if (role !== requiredRole) {
      this.el.nativeElement.style.display = 'none';
    }
  }

  ngOnDestroy() {

    if (this.loginResponseSubscription) {
      this.loginResponseSubscription.unsubscribe();
    }
  }
}
