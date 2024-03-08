import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Application } from 'src/app/model/application';
import { Studentdetails } from 'src/app/model/studentdetails';
import { RegisterService } from 'src/app/services/register.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.scss'],
})
export class ViewstudentComponent {

  value: number = 0;
  constructor(
    @Inject(MAT_DIALOG_DATA) public student: Studentdetails,
    private dialogRef: MatDialogRef<ViewstudentComponent>,
    private studentService: StudentService,
    private registerService: RegisterService
  ) {}

  email:string = '';

  indivualStudent!: Studentdetails;

  ngOnInit() {
    this.registerService.findUser(this.student.email.email).subscribe((data)=>{    
        this.email = data.email;
    })
    this.studentService.viewStudent(this.email).subscribe((response) =>{
      this.indivualStudent = response;
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }
 
}
