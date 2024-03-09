import { Role } from "./role";

export interface User {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
}
