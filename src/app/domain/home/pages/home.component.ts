import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingServiceInterface } from '../interface/bookservice-interface';
import { BookingServiceState } from '../state/booking-service-state';
import { inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { BookingServiceAction } from '../state/booking-action';
@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  store: Store = inject(Store);
  errorMessage: string | null = null

  isLoading: boolean = false;
  loading$: Observable<boolean> = inject(Store).select(BookingServiceState.loadingService)
  bookingservice$: Observable<BookingServiceInterface[]> = inject(Store).select(BookingServiceState.getBookingService);


  ngOnInit(): void {
    this.store.dispatch(new BookingServiceAction.getBookingService()).subscribe({
      error: (errMsg) => {
        this.errorMessage = errMsg.message;
        console.log(errMsg);
        this.hiddeSnackBack();
      }
    })
  }

  @Input() booking:string|null

  hiddeSnackBack() {
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000)
  }


}
