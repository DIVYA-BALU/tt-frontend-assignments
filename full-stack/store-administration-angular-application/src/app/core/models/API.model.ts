export interface LoginResponse {
  userEmail: string;
  branchesId: string[];
  sectionId: string;
  jwt: string;
  role: Role;
  permissions: Permission[];
}

export class Role {
  constructor(
    public _id: string,
    public name: string,
    public permissions: Permission[]
  ) {}
}

export class Permission {
  constructor(
    public _id: string,
    public name: string
  ) {}
}

export class LoginRequest{
  emailId: string;
  password:string;
  constructor(emailId: string,password: string){
    this.emailId = emailId,
    this.password = password
  }
}

export class EnrollUserRequest {
  constructor(
    public emailId: string,
    public name: string,
    public password: string,
    public role: string,
    public mobileNumber: number,
    public branchId: string,
    public sectionId: string
  ) {}
}

export interface User {
  _id: string;
  emailId: string;
  name: string;
  password: string;
  mobileNumber: number;
  branchesId: string[];
  sectionId: string;
  role: Role;
  permissions: Permission[];
  joiningDate: Date;
  employmentHistory: EmploymentDetail[];
}
export interface EmploymentDetail {
  joiningDate: Date;
  relievingDate: Date;
}