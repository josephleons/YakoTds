import { Injectable, inject } from '@angular/core';
import { BookInterface } from '../model/book-interface/book';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { EnvService } from '../../../core/environment/env-service';
import { ApiErrorService } from '../../../shared/services/ApiErrorService';


@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  apierr: ApiErrorService = inject(ApiErrorService);
  http: HttpClient = inject(HttpClient);
  apiurl: EnvService = inject(EnvService);

  fetchBook(id: number): Observable<BookInterface> {
    const url = this.apiurl.url(`/bookings/${id}`);
    return this.http.get<{ data: BookInterface }>(url)
      .pipe(
        tap(res => console.log('API response:', res)),
        map((resp: any) => resp.data),
        catchError((err: HttpErrorResponse) => this.apierr.handleError(err))
        
    )

  }

  fetchAllBooks(): Observable<BookInterface[]> {
    return this.http.get<{ data: BookInterface[] }>(this.apiurl.url(`/bookings`))
      .pipe(
        map(res => res.data),
        catchError((err: HttpErrorResponse) => this.apierr.handleError(err))
      )
  }
}
