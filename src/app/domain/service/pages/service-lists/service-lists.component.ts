import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceInterface } from '../../models/service-interface';
import { Store } from '@ngxs/store';
import { ServiceStates } from '../../state/service-states';
import { ServiceActions } from '../../state/service-actions';
import { SnackBarAction } from '../../../../shared/utilitie/snack-action';
import { BookStateService } from '../../../booking/state/book-state';
@Component({
  selector: 'app-service-lists',
  standalone: false,

  templateUrl: './service-lists.component.html',
  styleUrl: './service-lists.component.css'
})


export class ServiceListsComponent implements OnInit {
  store: Store = inject(Store);
    loading$: Observable<boolean> = inject(Store).select(BookStateService.loading)
  service$: Observable<ServiceInterface[]> = inject(Store).select(ServiceStates.getServiceSelector)

  ngOnInit(): void {
    this.store.dispatch(new ServiceActions.getAllServices()).subscribe({
      error: ((errMsg) => {
        console.log(errMsg);
         this.store.dispatch(new SnackBarAction.Show(errMsg.message, 3000))
        
      })
    })
  }

  getservice(id:number) {
    
  }

  getBadgeClass(stateName: string): string {
    switch (stateName.toLowerCase()) {
      case 'active':
        return 'badge-success';
      case 'inactive':
      default:
        return 'badge-info';
    }
  }

}
