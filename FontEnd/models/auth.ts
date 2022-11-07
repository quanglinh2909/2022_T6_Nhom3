export interface LoginPayload {
    Phone: string;
    password: string;
}

export interface RegisterPayload {
    Phone: string;
    Password: string;
    Email?: string;
    LinkFb?: string;
    Name: string;
}

export interface ChangePassByAdmin {
    UserId: string;
    NewPassword: string;
}
