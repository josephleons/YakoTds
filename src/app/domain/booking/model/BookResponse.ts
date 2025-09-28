import { BookInterface } from "./book-interface/book";

export interface BookingResponse<T> {
    message: string,
    data: T
}