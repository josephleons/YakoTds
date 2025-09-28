import { State, Action, Selector, StateContext } from '@ngxs/store';
import { UserInterface } from '../model/user.model';
import { inject, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { UserLoginAction } from './user.actions';
import { AuthService } from '../service/auth.service';
import { catchError, Observable, retry, tap, throwError } from 'rxjs';
import { LoginResponse } from '../model/login.model';
import { Router } from '@angular/router';
import { UserRegisterInterface } from '../../../domain/registration/model/user.model';
import { error } from 'console';

export interface UserStateModel {
    register: UserRegisterInterface,
    users: UserInterface | null;
    token: string | null;
    loading: boolean
}
export const initialUserState: UserStateModel = {
    users: null,
    register: null,
    token: null,
    loading: false
};

@State<UserStateModel>({
    name: 'users',
    defaults: initialUserState
})
@Injectable()

export class UserState {
    userService: AuthService = inject(AuthService);
    routes: Router = inject(Router);

    @Selector() static getUserSelector(state: UserStateModel): UserInterface | null { return state.users; }
    @Selector() static token(state: UserStateModel) { return state.token; }
    @Selector() static loading(state: UserStateModel) { return state.loading; }
    @Selector() static role(state: UserStateModel) { return state.users.role?.name }
    @Selector() static states(state: UserStateModel) { return state.users.status.name }

    @Action(UserLoginAction.Logout)
    logout(ctx: StateContext<UserStateModel>) {
        ctx.patchState({ loading: true })
        return this.userService.logout().pipe(
            tap(() => {
                ctx.setState({
                    ...initialUserState
                });
                this.userService.clear();
            })
        );
    }

    @Action(UserLoginAction.Login)
    loginUserAccount(ctx: StateContext<UserStateModel>, { payload }: UserLoginAction.Login) {
        return this.userService.login(payload)
            .pipe(
                tap((response: LoginResponse) => {
                    const users = response.user;
                    const token = response.token
                    ctx.patchState({
                        users,
                        token,
                        loading: false
                    });
                    localStorage.setItem('token', response.token)
                    localStorage.setItem('token_type', response.token_type)
                    localStorage.setItem('auth_user', JSON.stringify(response.user))
                }),
            )
    }
    @Action(UserLoginAction.Register)
    registerUserAccountState(ctx: StateContext<UserStateModel>, { payload }: UserLoginAction.Register) {
        return this.userService.registerUserAccount(payload)
            .pipe(
                tap((response: LoginResponse) => {
                    const users = response.user
                    ctx.setState({
                        ...initialUserState,
                        users
                    });
                    this.routes.navigate(['/auth'], { replaceUrl: true });
                })
            )
    }
}