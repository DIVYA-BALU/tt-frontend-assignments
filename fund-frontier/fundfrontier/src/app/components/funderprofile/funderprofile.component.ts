import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funder } from 'src/app/model/funder';
import { Studentdetails } from 'src/app/model/studentdetails';
import { FundersService } from 'src/app/services/funders.service';
import { FundsService } from 'src/app/services/funds.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-funderprofile',
  templateUrl: './funderprofile.component.html',
  styleUrls: ['./funderprofile.component.scss']
})
export class FunderprofileComponent {

  constructor(private fundersService: FundersService,
    private fundsService: FundsService,
    private studentService: StudentService) { }

  ngOnInit() {
    this.getFunder();
    this.findStudents();
  }

  funder: Funder = {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    countryOfBirth: '',
    countryOfResidence: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    occupation: ''
  }


  getFunder() {
    this.fundersService.getFunder().subscribe(
      (response) => {
        this.funder = response
      }
    )
  }

  UpdateFunder() {
    this.fundersService.updateFunder(this.funder).subscribe(
      (data) => {
        this.funder = data;
      }
    )
  }

  students: Studentdetails[] = [];

  findStudents() {
    this.fundsService.getStudentsByFunder(this.funder.email).subscribe(
      (response) => {
        response.forEach(
          (data) => {
            this.studentService.viewStudent(data.studentEmail).subscribe(
              (value) => {
                this.students.push(value);
              }
            )
          }
        )
      }
    )
  }
}

