import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdminTemasComponent } from './components/admin-temas/admin-temas.component';
import { AdminPartesCuerpoService } from './shared/services/admin-partes-cuerpo.service';
import { AdminPartesCuerpoComponent } from './components/admin-partes-cuerpo/admin-partes-cuerpo.component';
import { CategEpisComponent } from './components/categ-epis/categ-epis.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AdminTemasService } from './shared/services/admin-temas.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGuardService } from './shared/services/auth-guard-service.service';
import { H3Interceptor } from './shared/interceptors/h3.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteTemaDialogComponent } from './components/dialogs/delete-tema-dialog/delete-tema-dialog.component';
import { EditTemasDialogComponent } from './components/dialogs/edit-temas-dialog/edit-temas-dialog.component';
import { SortByPipe } from './shared/pipes/sort-by.pipe';
import { Hercules3SidebarComponent } from './components/hercules3-sidebar/hercules3-sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// H3 modules...
import { HerramientasModule } from '../app/h3-modules/herramientas/herramientas.module';

// Angular Material...
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatRippleModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';





// Breadcrumbs library
import { Ng7MatBreadcrumbModule } from "ng7-mat-breadcrumb";

// Ng-Select library
import { NgSelectModule } from '@ng-select/ng-select';


import { Hercules3MenuComponent } from './components/hercules3-menu/hercules3-menu.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ConsultaRiesgosComponent } from './components/consulta-riesgos/consulta-riesgos.component';
import { RiskFormComponent } from './components/risk-form/risk-form.component';
import { H3FilterBoxComponent } from './components/h3-filter-box/h3-filter-box.component';
import { H3SearchDialogComponent } from './components/h3-search-dialog/h3-search-dialog.component';
import { H3SearchTreeDialogComponent } from './components/h3-search-tree-dialog/h3-search-tree-dialog.component';
import { RiskTableComponent } from './components/risk-table/risk-table.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserPageComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    AdminTemasComponent,
    BreadcrumbComponent,
    EditTemasDialogComponent,
    DeleteTemaDialogComponent,
    SortByPipe,
    Hercules3SidebarComponent,
    Hercules3MenuComponent,
    AdminPartesCuerpoComponent,
    CategEpisComponent,
    NotFoundComponent,
    ConsultaRiesgosComponent,
    RiskFormComponent,
    H3FilterBoxComponent,
    H3SearchDialogComponent,
    H3SearchTreeDialogComponent,
    RiskTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTreeModule,
    MatRippleModule,
    Ng7MatBreadcrumbModule,
    HerramientasModule,
    MatExpansionModule,
    MatCheckboxModule,
    NgSelectModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule

  ],
  providers: [AdminTemasService, AuthenticationService, AuthGuardService, AdminPartesCuerpoService, {
    provide: HTTP_INTERCEPTORS,
    useClass: H3Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
