import { Component, inject, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BookInterface } from '../../model/book-interface/book';
import { BookStateService } from '../../state/book-state';
import { BookAction } from '../../state/book-actions';
import { Router } from '@angular/router';
import { SnackBarAction } from '../../../../shared/utilitie/snack-action';

@Component({
  selector: 'app-book-lists',
  standalone: false,
  templateUrl: './book-lists.component.html',
  styleUrl: './book-lists.component.css'
})
export class BookListsComponent implements OnInit {
  totalBooking: number = 0;
  store: Store = inject(Store);
  router: Router = inject(Router);

  book$: Observable<BookInterface[]> = inject(Store).select(BookStateService.getBookServiceSelect)
  loading$: Observable<boolean> = inject(Store).select(BookStateService.loading)

  ngOnInit() {
    this.store.dispatch(new BookAction.getAllBookServices()).subscribe({
      error: (errMsg) => {
        this.store.dispatch(new SnackBarAction.Show(errMsg.message, 3000))
      }
    });
  }

  loadBookData(id: number) {
    this.store.dispatch(new BookAction.ViewBookService(id)).subscribe({
      error: (errMsg) => {
        this.store.dispatch(new SnackBarAction.Show(errMsg.message, 3000, 'error'))

      }
    })
    this.router.navigate(['/app/bookingdetails', id]);
  }


  getBadgeClass(stateName: string): string {
    switch (stateName.toLowerCase()) {
      case 'confirmed':
        return 'badge-success';
      case 'pending':
        return 'badge-warning';
      case 'cancelled':
        return 'badge-danger';
      default:
        return 'badge-info';
    }
  }

}
