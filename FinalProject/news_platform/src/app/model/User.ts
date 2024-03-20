import { Authority } from "./Authority";
import { Role } from "./Role";
import { RolePermission } from "./RolePermission";

export interface User{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNo: string;
    occupation: string;
    location: string;
    createdDate: Date;
    suscribedEndDate: Date;
    role: Role;
    rolePermissions: RolePermission[];
    authorities: Authority[]
}