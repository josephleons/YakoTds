import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserState } from '../state/user.state';

@Injectable({
  providedIn: 'root'
})




export class AuthGuard implements CanActivate {
  store: Store = inject(Store);
  router: Router = inject(Router)

  canActivate(): boolean {
    const user = this.store.selectSnapshot(UserState.getUserSelector)
    if (user) return true;
    this.router.navigate(['/auth'])
    return false;
  }

};
