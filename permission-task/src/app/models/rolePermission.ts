import { Permission } from "./permission";
import { Role } from "./role";

export interface RolePermission {
id: string;
role: Role;
permission: Permission;
}