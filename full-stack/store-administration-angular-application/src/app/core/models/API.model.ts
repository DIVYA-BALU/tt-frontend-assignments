export class LoginResponse {
  userEmail: string;
  branchesId: string[];
  sectionId: string;
  jwt: string;
  role: Role;
  permissions: Permission[];

  constructor(userEmail: string, branchesId: string[], sectionId: string, jwt: string, role: Role, permissions: Permission[]) {
    this.userEmail = userEmail;
    this.branchesId = branchesId;
    this.sectionId = sectionId;
    this.jwt = jwt;
    this.role = role;
    this.permissions = permissions;
  }
}

export class Role {
  _id: string;
  name: string;
  permissions: Permission[];

  constructor(_id: string, name: string, permissions: Permission[]) {
    this._id = _id;
    this.name = name;
    this.permissions = permissions;
  }
}
export class Permission {
  _id: string;
  name: string;

  constructor(_id: string, name: string) {
    this._id = _id;
    this.name = name;
  }
}

export class LoginRequest {
  emailId: string;
  password: string;
  constructor(emailId: string, password: string) {
    this.emailId = emailId,
      this.password = password
  }
}

export class EnrollUserRequest {
  emailId: string;
  name: string;
  password: string;
  role: string;
  mobileNumber: number;
  branchId: string;
  sectionId: string;

  constructor(
    emailId: string, name: string, password: string, role: string, mobileNumber: number, branchId: string, sectionId: string
  ) {
    this.emailId = emailId;
    this.name = name;
    this.password = password;
    this.role = role;
    this.mobileNumber = mobileNumber;
    this.branchId = branchId;
    this.sectionId = sectionId;
  }
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
  joiningDate: string;
  employmentHistory: EmploymentDetail[];
}

export interface EmploymentDetail {
  joiningDate: string;
  relievingDate: string;
}

export interface NewBranch {
  branchName: string;
  location: string;
}

export interface Section {
  _id: string;
  name: string;
}

export interface Branch {
  _id: string;
  name: string;
  sectionDetails: SectionDetail[];
  createdDate: string;
  location: string;
}

export interface SectionDetail {
  section: Section;
  createdDate: string;
}

export interface PaginatedResponse<T> {
  content: T[]; 
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalPages: number;
  totalElements: number;
}

export interface Product {
  _id: string;
  productName: string;
  branch: Branch;
  section: Section;
  totalQuantity: number;
  price: number;
  cogs: number;
  availableQuantity: number;
}

export interface Bill {
  billItems: BillItem[];
  totalPrice: number;
}

export interface BillItem {
  product: Product;
  quantity: number;
}