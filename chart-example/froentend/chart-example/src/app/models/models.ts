export interface DensityByCoordinates {
    count: number;
    latitude: number;
    longitude: number;
}

export interface CityCount {
    city: string;
    count: number;
}

export interface RegistrationCount {
    year: number;
    month: number;
    count: number;
}

export interface HourlyLoginActivity {
    hour: number;
    count: number;
}