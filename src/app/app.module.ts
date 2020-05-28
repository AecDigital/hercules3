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
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AdminTemasService } from './shared/services/admin-temas.service';
import { AuthenticationService } from './shared/services/authentication.service';
import { AuthGuardService } from './shared/services/auth-guard-service.service';
import { H3Interceptor } from './shared/interceptors/h3.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteTemaDialogComponent } from './components/dialogs/delete-tema-dialog/delete-tema-dialog.component';
import { SortByPipe } from './shared/pipes/sort-by.pipe';
import { Hercules3SidebarComponent } from './components/hercules3-sidebar/hercules3-sidebar.component';

// Angular Material...
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTemasDialogComponent } from './components/dialogs/edit-temas-dialog/edit-temas-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { MatRippleModule } from '@angular/material/core';

// Breadcrumbs library
import { Ng7MatBreadcrumbModule } from "ng7-mat-breadcrumb";


import { Hercules3MenuComponent } from './components/hercules3-menu/hercules3-menu.component';


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
    Ng7MatBreadcrumbModule
  ],
  providers: [AdminTemasService, AuthenticationService, AuthGuardService, {
    provide: HTTP_INTERCEPTORS,
    useClass: H3Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
