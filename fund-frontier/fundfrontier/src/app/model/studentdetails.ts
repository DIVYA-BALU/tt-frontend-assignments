import { User } from "./user";

export interface Studentdetails {
  _id: string;
  profilePhoto: File | null;
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
  aadharCardProof: File | null;
  incomeProof: File | null;
  collegeName: string;
  yearOfStudy: string;
  course: string;
  studentIdentityProof: File | null;
  studentId: string;
  fundRequired: number;
  feeDetails: File | null;
  endDate: string;
  shortStory: string;
  status: string;
  reason: string;
  fundRaised: number;
  raisedPercent: number;
}
