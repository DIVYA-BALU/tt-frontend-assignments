export interface Application {
  _id:string;
  profilePhoto:File;
  firstName:string;
  lastName:string;
  email:string;
  phoneNumber:number;
  gender:string;
  countryOfBirth:string;
  countryOfResidence:string;
  dateOfBirth:Date;
  address:string;
  city:string;
  state:string;
  zipCode:number;
  school:string;
  aadharCardProof:File;
  incomeProof:File;
  collegeName:string;
  yearOfStudy:string;
  course:string;
  studentIdentityProof:File;
  studentId:string;
  fundRequired:number;
  feeDetails:File;
  endDate:Date;
  shortStory:string;
  status:string;
  reason:string;
}
