import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Imports de Angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { OpportunitiesComponent } from './components/opportunities/opportunities.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { Page404Component } from './components/page404/page404.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeComponent,
    OpportunitiesComponent,
    JobsComponent,
    Page404Component,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
