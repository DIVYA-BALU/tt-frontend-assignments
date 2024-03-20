import { Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserDetailsService } from '../core/services/user-details.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appBranch]'
})
export class BranchDirective implements OnInit {

  @Input() requiredBranchId: string = '';
  private branchIdSubscription: Subscription = new Subscription;

  constructor(
    private el: ElementRef,
    private userDetailsService: UserDetailsService,
  ) { }

  ngOnInit() {
    this.branchIdSubscription = this.userDetailsService.loginResponseSubject$.subscribe({
      next: (loginResponse) => {
        if (loginResponse.role.name !== 'ADMIN')
          this.checkBranchId(loginResponse.branchIds, this.requiredBranchId)
      }
    })

  }

  checkBranchId(branchIds: string[], requiredbranchId: string) {
    if (!branchIds) {
      this.el.nativeElement.style.display = 'none';
    }
    else if (!branchIds.some(branchId => branchId === requiredbranchId)) {
      this.el.nativeElement.style.display = 'none';
    }
  }

  ngOnDestroy(){

    if(this.branchIdSubscription)
    this.branchIdSubscription.unsubscribe();

  }
}
