import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserInterface } from '../../auth/model/user.model';
import { UserState } from '../../auth/state/user.state';
import { UserLoginAction } from '../../auth/state/user.actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbr',
  standalone: false,

  templateUrl: './navbr.component.html',
  styleUrl: './navbr.component.css'
})
export class NavbrComponent {
  store: Store = inject(Store);
  router: Router = inject(Router);

  user$: Observable<UserInterface | null> = inject(Store).select(UserState.getUserSelector);

  onLogout() {
    this.store.dispatch(new UserLoginAction.Logout())
    this.store.reset({});
    this.router.navigate(['/auth']); // redirect to login 
  }
}