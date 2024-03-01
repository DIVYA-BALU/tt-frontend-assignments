import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermission]'
})
export class PermissionDirective implements OnInit{

  constructor(){}
  ngOnInit(): void {
    console.log('in permission directive');

  }
}
