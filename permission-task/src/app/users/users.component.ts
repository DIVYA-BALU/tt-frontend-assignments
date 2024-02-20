import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Users } from '../models/users';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  check: boolean = false;
  users: Users[] = [];

  constructor(
    private userService: UsersService
  ) {
    userService.getAllUsers().subscribe((data) => {

      for (let i = 0; i < data.length; i++) {
        
        if(data[i].role.roleName === 'USER'){
          this.users.push(data[i]);
        }
      }

    });
  }

  write(e: Event){
    const target = e.target as HTMLElement;
    const id = target.id;
    console.log(id);    
  }

  edit(e: Event){
    const target = e.target as HTMLElement;
    const id = target.id;
    console.log(id);
  }

  delete(e: Event){
    const target = e.target as HTMLElement;
    const id = target.id;
    console.log(id);
  }
}
