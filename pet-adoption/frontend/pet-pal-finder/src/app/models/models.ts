export interface StatusMessage{
    message:string;
}

export interface EmailVerificationRequest{
    email:string;
}

export interface Otp{
    email:string;
    otp:number;
}

export interface User{
    email:string;
    password:string;
    role:string;
}

export interface LoginDetails{
    email:string;
    password:string;
}

export interface Token {
    token: string;
    refreshToken: string;
}

export interface Location {
    doorNo: string;
    street: string;
    city: string;
    district: string;
    state: string;
    country: string;
}

export interface AdopterDto {
    id: string;
    name: string;
    profilePhoto: File; 
    occupation: string;
    location: Location;
    contactNumber: number;
    dob: Date;
}

export interface VeterinaryDoctor {
    _id: string;
    name: string;
    profilePhoto: string;
    email: string;
    location: Location;
    degree: string;
    degreeCertificate: string;
    contactNumber: number;
    status: string;
    isSubscribed: boolean;
}

export interface Organization {
    _id: string;
    name: string;
    email: string;
    organizationPhoto: string;
    location: Location;
    contactNumber: number;
    status: string;
}