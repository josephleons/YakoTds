import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserLoginAction } from '../../state/user.actions';
import { UserInterface } from '../../model/user.model';
import { Router } from '@angular/router';
import { SnackBarAction } from '../../../../shared/utilitie/snack-action';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  store: Store = inject(Store);
  payload: UserInterface = this.initialpayload();
  router: Router = inject(Router)


  private initialpayload(): UserInterface {
    return {
      id: 0,
      name: '',
      username: '',
      password: '',
      email: '',
      status: { id: 0, name: '', color: '' },
      role: { name: '' }
    }
  }
  isLoading: boolean = false


  loginUser() {
    this.store.dispatch(new UserLoginAction.Login(this.payload)).subscribe({
      next: () => {
        this.isLoading = false;
        this.payload = this.initialpayload();
        this.router.navigate(['/app/dashboard']);
        this.store.dispatch(new SnackBarAction.Show('Welcome', 3000, 'success')); 

      }, error: (errMsg) => {
        this.isLoading = false,
          this.store.dispatch(new SnackBarAction.Show(errMsg.message, 3000, 'error'))

      }
    });
  }
}
