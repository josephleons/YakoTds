import { Component, inject, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SnackStateService } from '../snack-state';

@Component({
  selector: 'app-snackbar',
  standalone: false,

  templateUrl: './snackbar.component.html',
  styleUrl: './snackbar.component.css'
})
export class SnackbarComponent {
  snackbar$: Observable<string | null> = inject(Store).select(SnackStateService.SnackbarSelector);
  type$: Observable<'success' | 'error' | 'info' | 'warning'> = inject(Store).select(SnackStateService.Type);


}
