interface Role {
    _id: string;
    role: string;
  }

export interface User {
    _id:string;
    firstName:string;
    lastname:string;
    email:string;
    role: Role;
}
