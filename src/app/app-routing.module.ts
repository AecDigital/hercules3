import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuardService } from './shared/services/auth-guard-service.service';
import { HerramientasModule } from '../app/h3-modules/herramientas/herramientas.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConsultaRiesgosComponent } from './components/consulta-riesgos/consulta-riesgos.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'herramientas',
    canActivate: [AuthGuardService],
    
    loadChildren: () => import('../app/h3-modules/herramientas/herramientas.module')
    .then(m => m.HerramientasModule)
  },
  { path: 'login', component: LoginPageComponent },
  { path: 'consulta-riesgos', component: ConsultaRiesgosComponent },
  { path: '**', component: NotFoundComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
