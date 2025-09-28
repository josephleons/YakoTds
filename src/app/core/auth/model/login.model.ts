import { UserInterface } from "./user.model";

export interface LoginResponse {
    message: string;
    token: string;
    token_type: 'Bearer' | string;   
    user: UserInterface;
}