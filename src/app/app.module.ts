import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { HomeComponent } from './domain/home/pages/home.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DashboardComponent } from './domain/dashboard/pages/dashboard.component';
import { MatMenuModule } from '@angular/material/menu';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { UserState } from './core/auth/state/user.state';
import { NgxsModule } from '@ngxs/store';
import { ProfileComponent } from './domain/user/pages/profile/profile.component';
import { SettingComponent } from './domain/user/pages/setting/setting.component';
import { UserRoutingModule } from './domain/user/user-routing.module';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NavbrComponent } from './core/layout/navbr/navbr.component';
import { ClarityModule } from "@clr/angular";
import { ClarityIcons, userIcon, homeIcon, noteIcon, warningStandardIcon } from '@cds/core/icon';
import { AppRoutingModule } from './app-routing.module';
import { MainLayoutComponent } from './core/layout/main-layout/main-layout.component';
import { BookDetailsComponent } from './domain/booking/pages/book-details/book-details.component';
import { BookListsComponent } from './domain/booking/pages/book-lists/book-lists.component';
import { BookStateService } from './domain/booking/state/book-state';
import { ServiceStates } from './domain/service/state/service-states';
import { CardComponent } from './shared/card/card.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './domain/registration/pages/registration/registration.component';
import { AuthInterceptor } from './shared/inteceptor/auth-service-interceptor';
import { SnackbarComponent } from './shared/utilitie/snackbar/snackbar.component';
import { BookingServiceState } from './domain/home/state/booking-service-state';
import { CommonModule } from '@angular/common';
import { ServiceListsComponent } from './domain/service/pages/service-lists/service-lists.component';
import { ServiceDetailsComponent } from './domain/service/pages/service-details/service-details.component';
import { SnackStateService } from './shared/utilitie/snack-state';
ClarityIcons.addIcons(userIcon, homeIcon, noteIcon, warningStandardIcon);







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent,
    DashboardComponent,
    LoginComponent,
    ProfileComponent,
    SettingComponent,
    NavbrComponent,
    MainLayoutComponent,
    BookDetailsComponent,
    BookListsComponent,
    CardComponent,
    RegistrationComponent,
    SnackbarComponent,
    ServiceListsComponent,
    ServiceDetailsComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule,
    MatMenuModule,
    UserRoutingModule,
    AppRoutingModule,
    ClarityModule,
    CommonModule,
    NgxsModule.forRoot([UserState, BookStateService, BookingServiceState, ServiceStates, SnackStateService]),
    NgxsStoragePluginModule.forRoot({
      keys: '*'
    })
    // ChartModule
  ],
  providers: [
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideClientHydration(withEventReplay()),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
