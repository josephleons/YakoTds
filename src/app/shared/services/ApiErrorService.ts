import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiErrorService {
    public handleError(err: HttpErrorResponse) {
        if (err.status === 404) {
            const message = err.error.message
            return throwError(() => ({
                code: 404,
                message
            }));
        }
        if (err.status === 422 && err.error) {
            const message = err.error.message;
            const failedError = err.error.message || {};

            return throwError(() => ({
                code: 422,
                message,
                failedError
            }))
        }
        // Fallbacks
        if (err.status === 500 || err.error) {
            const message = 'Something went wrong. Please try again.';
            return throwError(() => ({
                code: err.status || 500,
                message,
            }))

        }
        return throwError(() => err)


    }
}