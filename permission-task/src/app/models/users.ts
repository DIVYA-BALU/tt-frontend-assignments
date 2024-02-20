import { authority } from "./authority";
import { Role } from "./role";

export interface Users {
  id: string;
  name: string;
  email: string;
  authorities: authority[];
  role: Role;
  rolePermissions: [];
}
