import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, map } from 'rxjs';
import { ServiceInterface } from '../models/service-interface';
import { EnvService } from '../../../core/environment/env-service';
import { ApiErrorService } from '../../../shared/services/ApiErrorService';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {
  //error handling
  ApiErrorHandle: ApiErrorService = inject(ApiErrorService);
  //url
  apiUrl: EnvService = inject(EnvService);
  http: HttpClient = inject(HttpClient);


  public getallservices(): Observable<ServiceInterface[]> {
    const url = this.apiUrl.url('/services');
    return this.http.get<{ data: ServiceInterface[] }>(url)
      .pipe(
        map((resp) => resp.data),
        catchError((err: HttpErrorResponse) => this.ApiErrorHandle.handleError(err))
      )
  }
}
