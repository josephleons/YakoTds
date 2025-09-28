import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { compose } from '@ngxs/store/operators';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../core/auth/guard/auth.guard';
import { MainLayoutComponent } from '../../core/layout/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'profile', component: ProfileComponent}
    ]

  },
  // {path:'profile',component:M}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UserRoutingModule { }
