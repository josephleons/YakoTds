import { Status } from "../../../shared/interface/status";

export interface UserInterface {
    id: number;
    name: string;
    password: string,
    username: string;
    email: string;
    role: {
        name: string
    } | null;
    status: {
        id: number;
        name: string;
        color: string
    } | null;
}