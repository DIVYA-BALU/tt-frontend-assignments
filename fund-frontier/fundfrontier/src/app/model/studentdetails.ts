import { User } from "./user";

export interface Studentdetails {
  _id: string;
  profilePhoto: File;
  firstName: string;
  lastName: string;
  email: User;
  phoneNumber: number;
  gender: string;
  countryOfBirth: string;
  countryOfResidence: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: number;
  school: string;
  aadharCardProof: File;
  incomeProof: File;
  collegeName: string;
  yearOfStudy: string;
  course: string;
  studentIdentityProof: File;
  studentId: string;
  fundRequired: number;
  feeDetails: File;
  endDate: string;
  shortStory: string;
  status: string;
  reason: string;
  fundRaised: number;
  raisedPercent: number
}
