import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './domain/dashboard/pages/dashboard.component';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { BookListsComponent } from './domain/booking/pages/book-lists/book-lists.component';
import { BookDetailsComponent } from './domain/booking/pages/book-details/book-details.component';
import { AuthGuard } from './core/auth/guard/auth.guard';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { RegistrationComponent } from './domain/registration/pages/registration/registration.component';
import { HomeComponent } from './domain/home/pages/home.component';
import { ServiceListsComponent } from './domain/service/pages/service-lists/service-lists.component';


// Define the routes
const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Default route
  { path: 'auth', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent }, // Default route
  // Default route
  {
    path: 'app', component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'bookingdetails/:id', component: BookDetailsComponent },
      { path: 'booking', component: BookListsComponent },
      { path: 'services', component: ServiceListsComponent }
    ]
  },
  // Default route
  // { path: '**', redirectTo: 'home', pathMatch: 'full' }
  // Default route
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
