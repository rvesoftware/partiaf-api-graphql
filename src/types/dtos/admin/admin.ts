export interface Admin {
    _id?: string;
    firstname: string;
    lastname: string;
    email: string;
    identification_type: string;
    identification: number;
    age: number;
    password: string;
    phone: string;
    photo: string;
    gender: string;
    status?: string;
    address: string;
    verification_code?: string;
    last_login?: any;
    location: string;
    date_of_birth: any;
    notifications?: boolean;
}
