import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from '@angular/core';
import { BookingServiceInterface } from "../interface/bookservice-interface";
import { EnvService } from "../../../core/environment/env-service";
import { Observable, catchError, map } from "rxjs";
import { ApiErrorService } from "../../../shared/services/ApiErrorService";

@Injectable({
    providedIn: 'root'
})

export class BookingService {
    http: HttpClient = inject(HttpClient);
    envApi: EnvService = inject(EnvService);
    apiError: ApiErrorService = inject(ApiErrorService);

    BookingServices(): Observable<BookingServiceInterface[]> {
        return this.http.get<{ data: BookingServiceInterface[] }>(this.envApi.url(`/services`))
            .pipe(
                map(res => res.data),
            );
    }
}