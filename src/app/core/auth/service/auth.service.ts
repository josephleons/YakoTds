import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { LoginResponse } from "../model/login.model";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { UserRegisterInterface } from "../../../domain/registration/model/user.model";
import { EnvService } from "../../environment/env-service";
import { ApiErrorService } from "../../../shared/services/ApiErrorService";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    // API call 
    envapi: EnvService = inject(EnvService);
    http: HttpClient = inject(HttpClient);
    apierr: ApiErrorService = inject(ApiErrorService);

    // Register API Function 
    registerUserAccount(data: UserRegisterInterface) {
        return this.http.post(this.envapi.url('/store'), data)
            .pipe(
                catchError((err: HttpErrorResponse) => this.apierr.handleError(err))
            )
    }
    // Login API Function 
    login(payload: { email: string, password: string }) {
        return this.http.post<LoginResponse>(this.envapi.url('/login'), payload)
            .pipe(
                catchError((err: HttpErrorResponse) => this.apierr.handleError(err))
            );
    }
    // Logout API Function 
    logout(): Observable<void> {
        return this.http.post<void>(this.envapi.url('/logout'), {}).pipe()

    }
    // Get User Login Token 
    get token(): string | null {
        return localStorage.getItem('token');
    }
    get tokenType(): string {
        return localStorage.getItem('token_type') ?? 'Bearer';
    }
    // Clean token in LocalStorage 
    clear() {
        localStorage.removeItem('token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('user');
    }



}
