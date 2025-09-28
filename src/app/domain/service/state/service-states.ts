import { Action, Selector, State, StateContext } from '@ngxs/store'
import { ServiceInterface } from '../models/service-interface'
import { ApiErrorService } from '../../../shared/services/ApiErrorService';
import { inject, Injectable } from '@angular/core';
import { tap, map, catchError, finalize } from 'rxjs';
import { ServiceApiService } from '../api/service-api.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ServiceActions } from './service-actions';


export interface ServiceStateModel {
    service: ServiceInterface[],
    loading: boolean
}

@State<ServiceStateModel>({
    name: 'service',
    defaults: {
        service: [],
        loading: false
    }
})

@Injectable()

export class ServiceStates {

    ApiErrorHandler: ApiErrorService = inject(ApiErrorService);
    serviceApi: ServiceApiService = inject(ServiceApiService);


    @Selector()
    static getServiceSelector(state: ServiceStateModel): ServiceInterface[] { return state.service }
    static loadingSelector(state: ServiceStateModel): boolean { return state.loading }

    @Action(ServiceActions.getAllServices)
    getallservice(ctx: StateContext<ServiceStateModel>, action: ServiceActions.getAllServices) {
        ctx.patchState({ loading: true });
        return this.serviceApi.getallservices()
            .pipe(
                tap((service) => {
                    ctx.patchState({ loading: false, service })
                }
                ),

                catchError((err: HttpErrorResponse) => this.ApiErrorHandler.handleError(err)),
                finalize(() => ctx.patchState({ loading: false }))
            )
    }
}
