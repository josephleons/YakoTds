import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../../core/auth/model/user.model';
import { UserState } from '../../../core/auth/state/user.state';
import { Store } from '@ngxs/store';
import { BookStateService } from '../../booking/state/book-state';
import { BookInterface } from '../../booking/model/book-interface/book';
import { map } from 'rxjs/operators';
import { text } from 'stream/consumers';
import { ServiceInterface } from '../../service/models/service-interface';
import { ServiceStates } from '../../service/state/service-states';

@Component({
  selector: 'app-dashboard',
  standalone: false,

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  store: Store = inject(Store);
  totalbooking: number = 0;
  totalservices: number = 0;
  user$: Observable<UserInterface | null> = inject(Store).select(UserState.getUserSelector);

  role$ = this.store.select(UserState.role);
  states$ = this.store.select(UserState.states);

  allbooking$: Observable<BookInterface[]> = inject(Store).select(BookStateService.getBookServiceSelect);
  totalBooking$ = this.allbooking$.pipe(map(b => b.length));
  service$: Observable<ServiceInterface[]> = inject(Store).select(ServiceStates.getServiceSelector)
  totalservices$ = this.service$.pipe(map(b => b.length));
  

  @Input() all: string = 'Booking';
  @Input() pending: string = 'Pending';
  @Input() complete: string = 'Complete';
  @Input() service: string = 'Services';

  getClassColor(setStateColor: string): string {
    if (!setStateColor) return 'badge-info fs-5';
    switch (setStateColor) {
      case 'Booking':
        return 'text-secondary fs-5 fw-bold';
      case 'Pending':
        return 'text-warning fs-5 fw-bold';
      case 'Complete':
        return 'text-success fs-5 fw-bold';
      case 'Services':
        return 'text-secondary fs-5 fw-bold';
      default:
        return 'text-info fs-5 fw-bold';
    }
  }

}
