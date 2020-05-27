import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service'
import { Roles } from '../../shared/constants/h3Roles';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  session: any = {}
  userRol: any;

  constructor(private autentication: AuthenticationService) { }

  ngOnInit(): void {
    this.session = JSON.parse(sessionStorage.getItem("session"));
    Roles.forEach(rol => {
      if (rol.id === this.session.usuario.rol) {
        this.userRol = {...rol}
      }
    });
  }

  logOut = () => {
    this.autentication.logout();
  }

}
