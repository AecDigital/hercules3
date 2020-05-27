import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  session: any = {}

  constructor(private autentication: AuthenticationService) { }

  ngOnInit(): void {
    this.session = JSON.parse(sessionStorage.getItem("session"));
  }

  logOut = () => {
    this.autentication.logout();
  }

}
