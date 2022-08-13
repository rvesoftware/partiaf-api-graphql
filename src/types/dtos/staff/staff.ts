export interface Staff {
    _id: string;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    role: string;
    password: string;
    phone: string;
    photo: string;
    gender: string;
    biography: string;
    status: number;
    balance: number;
    verification_code: number;
    last_login: Date;
    location: string;
    date_of_birth: Date;
    notifications: boolean;
}
