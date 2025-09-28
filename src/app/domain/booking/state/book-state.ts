import { inject, Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { BookInterface } from '../model/book-interface/book';
import { BookApiService } from '../service-api/book-api.service';
import { BookAction } from './book-actions';
import { catchError, finalize, Observable, tap, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { error } from 'console';
import { ApiErrorService } from '../../../shared/services/ApiErrorService';

export interface BookStateModel {
  current: BookInterface | null,
  books: BookInterface[],
  loading: boolean;
}

@State<BookStateModel>({
  name: 'bookservice',
  defaults: {
    books: [],
    loading: false,
    current: null

  }
})
@Injectable()
export class BookStateService {
  apierr: ApiErrorService = inject(ApiErrorService);
  bookservice: BookApiService = inject(BookApiService);

  @Selector() static getBookServiceSelect(state: BookStateModel): BookInterface[] { return state.books }
  @Selector() static getCurrentBooking(state: BookStateModel): BookInterface | null { return state.current }
  @Selector() static loading(state: BookStateModel): boolean { return state.loading }

  @Action(BookAction.ViewBookService)
  currentBooking(ctx: StateContext<BookStateModel>, action: BookAction.ViewBookService) {
    return this.bookservice.fetchBook(action.id).pipe(
      tap((load) => {
        ctx.patchState({ current: load })
      })

    )
  }

  @Action(BookAction.getAllBookServices)
  GetAllBookService(ctx: StateContext<BookStateModel>) {
    ctx.patchState({ loading: true });
    return this.bookservice.fetchAllBooks()
      .pipe(
        tap((books) => {
          ctx.patchState({ loading: false, books })
          console.log("Booking", books);
        }),
        catchError((err: HttpErrorResponse) => this.apierr.handleError(err)),
        finalize(() => ctx.patchState({ loading: false }))
      );
  }



}
