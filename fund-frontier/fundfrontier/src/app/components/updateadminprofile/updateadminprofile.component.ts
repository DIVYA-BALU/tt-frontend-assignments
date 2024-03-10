import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Register } from 'src/app/model/register';
import { Role } from 'src/app/model/role';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-updateadminprofile',
  templateUrl: './updateadminprofile.component.html',
  styleUrls: ['./updateadminprofile.component.scss']
})
export class UpdateadminprofileComponent {

  buttonClick: boolean = false;
  updateStatus: string = '';
  user: User = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    role: {
      _id: '',
      role: ''
    }
  };

  constructor(private userService: UserService) {

  }


  getprofile() {
    this.userService.getUser().subscribe(
      (data) => {
        this.user = data;

      }
    )
  }

  ngOnInit() {
    this.getprofile();
  }

  onProfile(profileForm: NgForm) { }

  reloadPage() {
    window.location.reload();
  }

  cancelUpdate() {
    this.buttonClick = false;
    this.updateStatus = '';  
    this.getprofile();
  }

  updateUser() {
    this.userService.updateProfile(this.user).subscribe((data) => {
      this.buttonClick = true;
      this.updateStatus = 'Profile Updated';
    });
  }

}
