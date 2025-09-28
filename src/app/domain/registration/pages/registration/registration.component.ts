import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { UserLoginAction } from '../../../../core/auth/state/user.actions';
import { UserRegisterInterface } from '../../model/user.model';


@Component({
  selector: 'app-registration',
  standalone: false,

  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  // all service Injection 
  router: Router = inject(Router);
  store: Store = inject(Store);
  payload: UserRegisterInterface = this.initialpayload();



  private initialpayload(): UserRegisterInterface {
    return {
      id:'',
      email: '',
      mobile: '',
      password: '',
      username: '',
      confirmPassword: '',
    }
  }

  errorMessage: string | null = null;
  registerUserAccount(form: any) {
    this.store.dispatch(new UserLoginAction.Register(this.payload)).subscribe({
      next: () => {
        this.payload = this.initialpayload();
        this.router.navigate(['/auth'])
      },
      error: (errorMsg) => {
        this.errorMessage = errorMsg.message
        console.log(errorMsg);
        this.hiddeSnackBack();
      }
    })
    form.reset();
  }
  hiddeSnackBack() {
    setTimeout(() => {
      this.errorMessage = null;
    }, 3000)
  }
}
