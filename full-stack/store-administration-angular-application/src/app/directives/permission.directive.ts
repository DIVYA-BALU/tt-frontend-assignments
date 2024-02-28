import { Directive, Injectable, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UserDetailsService } from '../core/services/user-details.service';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit{

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private userDetailsService: UserDetailsService
  ) {}

  ngOnInit(){
    this.userDetailsService.getLoginResponseSubject().subscribe(loginResponse => {
      console.log(loginResponse.role.permissions);
    })
  }
}
