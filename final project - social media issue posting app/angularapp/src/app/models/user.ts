export interface User {
    userId: string;
    userName: string;
    userPassword: string;
    location: string;
    role: Role;

}

export enum Role {
    ADMIN,
    PUBLIC
}
