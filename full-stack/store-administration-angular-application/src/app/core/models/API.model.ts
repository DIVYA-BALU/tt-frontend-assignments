export class LoginResponse {
  constructor(
    public userEmail: string,
    public branchesId: string[],
    public sectionId: string,
    public jwt: string,
    public role: Role,
    public permissions: Permission[]
  ) {}
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