import { State, Store, Action, Selector, StateContext } from "@ngxs/store";
import { BookingServiceInterface } from "../interface/bookservice-interface";
import { Injectable, inject } from "@angular/core";
import { BookingServiceAction } from "./booking-action";
import { BookingService } from "../services/bookserviv-api";
import { catchError, of, tap } from "rxjs";
import { ApiErrorService } from "../../../shared/services/ApiErrorService";
import { HttpErrorResponse } from "@angular/common/http";




export interface BookingStateModel {
    currentService: BookingServiceInterface | null,
    book: BookingServiceInterface[],
    loadingService: boolean
}

@State<BookingStateModel>({
    name: 'bookingService',
    defaults: {
        book: [],
        currentService: null,
        loadingService: false
    }
})
@Injectable({
    providedIn: 'root'
})
export class BookingServiceState {
    bookingService: BookingService = inject(BookingService);
    apiErr: ApiErrorService = inject(ApiErrorService);
    store: Store = inject(Store);

    @Selector() static getBookingService(state: BookingStateModel): BookingServiceInterface[] { return state.book ?? [] }
    @Selector() static loadingService(state: BookingStateModel): boolean { return state.loadingService ?? false }



    @Action(BookingServiceAction.getBookingService)
    getBooking(ctx: StateContext<BookingStateModel>) {
        ctx.patchState({ loadingService: true });
        return this.bookingService.BookingServices()
            .pipe(
                tap((book) => {
                    ctx.patchState({ loadingService: false, book })
                    console.log('Booking Service', book);
                }),
                catchError((err: HttpErrorResponse) => {
                    ctx.patchState({ loadingService: false })
                    this.apiErr.handleError(err);
                    return of([]);
                })
            )
    }
}



