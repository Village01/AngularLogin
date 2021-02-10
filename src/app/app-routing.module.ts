import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import {ContactComponentComponent} from './contact-component/contact-component.component';
import {OverviewComponent} from './overview/overview.component';
import { UpdateUserComponent } from './update-user/update-user.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'detail', component: DetailComponent,
    children: [
      { path: 'contact', component: ContactComponentComponent},
      { path: 'overview', component: OverviewComponent},
      { path: 'add', component: UpdateUserComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
