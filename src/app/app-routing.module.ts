import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageModule } from './pages/login-page/login-page.module'
import { UserPageComponent } from './pages/user-page/user-page.component';


const routes: Routes = [
  { path : 'userPage', component : UserPageComponent },
  { path : 'login', loadChildren: () => LoginPageModule },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
