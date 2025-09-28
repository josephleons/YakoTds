import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../../../core/auth/model/user.model';
import { UserState } from '../../../../core/auth/state/user.state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-profile',
  standalone: false,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  store: Store = inject(Store);
  user$: Observable<UserInterface | null> = inject(Store).select(UserState.getUserSelector);


  role$ = this.store.select(UserState.role);
  states$ = this.store.select(UserState.states);

}
