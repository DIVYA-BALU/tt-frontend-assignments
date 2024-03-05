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
    isSubscribed: boolean;
    subscriptionEndDate: Date;
    role: Role;
    rolePermission: RolePermission[];
    authorities: Authority[]
}