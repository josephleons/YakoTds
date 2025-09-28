import { Status } from "./status";

export interface User {
    id?: number,
    name: string,
    username: string,
    email: string,
    password: string,
    profile:string,
    status: Status
    
}
