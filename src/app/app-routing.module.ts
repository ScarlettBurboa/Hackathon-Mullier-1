import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent  } from './components/home/home.component';
import { JobsComponent  } from './components/jobs/jobs.component';
import { OpportunitiesComponent  } from './components/opportunities/opportunities.component';
import { LoginComponent  } from './components/users/login/login.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent  } from './components/users/register/register.component';
import { NavbarComponent  }from './components/navbar/navbar.component';
import { Page404Component } from  './components/page404/page404.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'jobs', component: JobsComponent},
  {path: 'opportunities', component: OpportunitiesComponent},
  {path: 'users/profile', component: ProfileComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
