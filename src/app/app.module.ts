import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { FromComponent } from './from/from.component';
import { CreateAccountComponent } from './user/create-account/create-account.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ProfileComponent } from './user/profile/profile.component';
import { FindComponent } from './home/find/find.component';
import { NavComponent } from './inc/nav/nav.component';
import { TrypostComponent } from './trypost/trypost.component';

// Define the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'try-post', component: TrypostComponent },
  { path: 'user', component: UserComponent }, // Default route
 // Default route
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    FromComponent,
    CreateAccountComponent,
    UserListComponent,
    ProfileComponent,
    FindComponent,
    NavComponent,
    TrypostComponent, // Declare your components here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // Import RouterModule with the routes
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
