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