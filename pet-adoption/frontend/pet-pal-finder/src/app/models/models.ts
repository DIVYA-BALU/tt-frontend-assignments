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

export interface StatusUpdate{
    id:string;
    status:string;
}

export interface AppointmentUpdate{
    id:string;
    status:string;
    date:Date;
}

export interface PetPost {
    _id: string;
    category: string;
    breed: string;
    quantity: number;
    gender: string;
    weight: number;
    isInfected: boolean;
    posterId: Organization;
    images: string[];
    description: string;
    isAdopted: boolean;
    postedDate:Date
}

export interface Adopter {
    _id: string;
    name: string;
    email: string;
    profilePhoto: string;
    occupation: string;
    location: Location; 
    contactNumber: number;
    dob: Date;
  }

export interface AppointmentStatus {
    _id: string | null;
    doctorId: VeterinaryDoctor;
    requesterId: string;
    requesterType: string;
    reason: string;
    status: string;
    requestedDate: Date | null;
    acceptOrRejectedDate: Date | null;
    appointmentDate: Date | null;
}

export interface AppointmentStatusDto {
    appointmentStatus: AppointmentStatus;
    profileUrl: string;
    name: string;
    email: string;
    contactNumber: number;
    location: Location;
}

export interface SubscriptionPlan {
    _id: string;
    amount: number;
    months: number;
}

export interface SubscriptionTransaction {
    _id: string | null;
    currentPlan: SubscriptionPlan;
    subscribedOn: Date;
    validTill: Date;
    paymentId: string;
    subscriberId: string;
}

export interface AdoptionDetail {
    _id: string;
    profileId: string;
    petPostId: PetPost;
    noOfAdults: number;
    noOfChildren: number;
    allergyToAnimal: boolean;
    homeType: string;
    familyAcceptance: boolean;
    status:string;
}

export interface AdoptionDetailDto {
    profileId: string;
    petPostId: {
        _id:string;
    };
    noOfAdults: number;
    noOfChildren: number;
    allergyToAnimal: boolean;
    homeType: string;
    familyAcceptance: boolean;
}