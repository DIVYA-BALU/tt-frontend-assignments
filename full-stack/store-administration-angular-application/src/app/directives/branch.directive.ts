import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserDetailsService } from '../core/services/user-details.service';
import { RoleDirective } from './role.directive';

@Directive({
  selector: '[appBranch]'
})
export class BranchDirective implements OnInit {

  @Input() requiredBranchId: string = '';

  constructor(
    private el: ElementRef,
    private userDetailsService: UserDetailsService,
  ) { }

  ngOnInit() {
    const branchIdSubscription = this.userDetailsService.loginResponseSubject$.subscribe({
      next: (loginResponse) => {
        if (loginResponse.role.name !== 'ADMIN')
          this.checkBranchId(loginResponse.branchesId, this.requiredBranchId)
      }
    })

  }

  checkBranchId(branchesId: string[], requiredbranchId: string) {
    if (!branchesId) {
      this.el.nativeElement.style.display = 'none';
    }
    else if (!branchesId.some(branchId => branchId === requiredbranchId)) {
      this.el.nativeElement.style.display = 'none';
    }
  }
}
