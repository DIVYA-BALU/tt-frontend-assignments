import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../model/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.scss']
})
export class UpdateuserComponent {
  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public dialogRef: MatDialogRef<UpdateuserComponent>,
    private userService: UserService
  ) {}

  updateUserForm!: FormGroup;

  ngOnInit() {
    this.updateUserForm = this.fb.group({
      _id: [this.data._id],
      firstname: [this.data.firstname],
      lastname: [this.data.lastname],
      email: [this.data.email],
      role: [this.data.role],
    });
  }

  onUpdateUser() {
    this.userService
      .updateUser(this.updateUserForm.value)
      .subscribe((response) => {
        this.dialogRef.close();
      });
  }
  onNoClick() {
    this.dialogRef.close();
  }
}

