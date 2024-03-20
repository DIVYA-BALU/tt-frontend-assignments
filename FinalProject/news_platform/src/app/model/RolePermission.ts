import { Permission } from './Permission';
import { Role } from './Role';

export interface RolePermission {
  id: string;
  role: Role;
  permission: Permission;
}
