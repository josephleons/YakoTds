import { Injectable } from '@angular/core';

import { State, Selector, Action, StateContext } from '@ngxs/store';
import { SnackBarAction } from './snack-action';


export interface SnackBarModel {
  message: string | null,
  type: 'success' | 'error' | 'info' | 'warning';

}

@State<SnackBarModel>({
  name: 'snackbar',
  defaults: {
    message: null,
    type: 'error'
  }
})

@Injectable()


export class SnackStateService {
  @Selector()
  static SnackbarSelector(state: SnackBarModel): string | null {
    return state.message;
  }
  static Type(state: SnackBarModel): 'success' | 'error' | 'info' | 'warning' {
    return state.type;
  }


  @Action(SnackBarAction.Show)
  show(ctx: StateContext<SnackBarModel>, action: SnackBarAction.Show) {
    ctx.patchState({ message: action.message, type: action.type });
      setTimeout(() => {
        ctx.dispatch(new SnackBarAction.Hide());
      }, action.duration);
  }

  @Action(SnackBarAction.Hide)
  hide(ctx: StateContext<SnackBarModel>) {
    ctx.patchState({
      message: null,
      type: 'error'
    });
  }

}
