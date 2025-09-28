import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookInterface } from '../../model/book-interface/book';
import { BookStateService } from '../../state/book-state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-book-details',
  standalone: false,

  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.css'
})
export class BookDetailsComponent implements OnInit {

  store: Store = inject(Store);
  loading$: Observable<boolean> = inject(Store).select(BookStateService.loading)
  currentbook$: Observable<BookInterface | null> = this.store.select(BookStateService.getCurrentBooking)

  ngOnInit() {

  }

  getButtonClass(stateName: string): string {
    switch (stateName.toLowerCase()) {
      case 'confirmed':
        return 'btn-success';
      case 'pending':
        return 'btn-warning';
      case 'rejected':
        return 'btn-danger';
      default:
        return 'btn-secondary'
    }
  }
}

