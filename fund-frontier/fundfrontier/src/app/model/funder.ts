import { User } from "./user";

export interface Funder {
    _id: string;
    firstName: string;
    lastName: string;
    email: User;
    phoneNumber: string;
    countryOfBirth: string;
    countryOfResidence: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    occupation: string;
}
