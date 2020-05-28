import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './shared/services/auth-guard-service.service';


const routes: Routes = [
  { 
    path : 'herramientas/admin/datos-maestros/temas', 
    component : UserPageComponent, 
    canActivate : [AuthGuardService],
    data: {
      title: 'Admin Temas',
      breadcrumb: [
        {
          label: 'Temas',
          url: '/herramientas/admin/datos-maestros/temas'
        }
      ]
    }, },
  { path : 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
