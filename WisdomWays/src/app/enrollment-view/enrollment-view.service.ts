import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentViewService {

  listOfUsers: EnrollmentsDTO[] = [];

  user: EnrollmentsDTO = {
    username: "grace",
    enrollDate: new Date("12-01-2024"),
    status: "ongoing"
  }

  constructor() { }

  getAllEnrollments() {
    this.listOfUsers = [];
    this.listOfUsers.push(this.user);
    return this.listOfUsers;
  }
}

interface EnrollmentsDTO {
  username: string;
  enrollDate: Date;
  status: string;
}
