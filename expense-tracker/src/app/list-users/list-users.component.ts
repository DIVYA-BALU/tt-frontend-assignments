import { Component } from '@angular/core';
import { ListUsersService } from './list-users.service';
import { users } from './users';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  constructor( private listUsersService : ListUsersService ){ }

  userArray : any[] = [];

  userVar : users = {
    userName : ''
  }

  ngOnInit() { 
    // if(`${localStorage.getItem('role')}` === 'ROLE_FINANCIAL_ADVISOR'){
    //   this.listUsersService.getUsers(`${localStorage.getItem('userName')}`).subscribe({
    //     next : (users) => {
    //       users.body.forEach(element => {
    //         this.userArray.push(this.userVar.userName = element.accountHolderName);
    //       });       
    //     },
    //     error : (error) => {

    //     },
    //     complete : () => {

    //     }
    //   })
    // }
    // else{
      this.listUsersService.getAllUsers().subscribe({
        next : (users) => {
          users.body.forEach(element => {
            this.userVar.userName = element.accountHolderName;
            this.userArray.push(this.userVar.userName);
          });        
        },
        error : (error) => {

        },
        complete : () => {

        }
      })
    // }     
  }
}   