import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthenticationService } from '../../shared/services/authentication.service';


@Component({
  selector: 'app-hercules3-sidebar',
  templateUrl: './hercules3-sidebar.component.html',
  styleUrls: ['./hercules3-sidebar.component.scss']
})
export class Hercules3SidebarComponent implements OnInit, AfterViewChecked {
  mode = new FormControl('over');
  sessionUser: any;

  constructor(private router: Router, private authentication: AuthenticationService) { }

  ngOnInit(): void {
    this.sessionUser = sessionStorage.getItem('session');
  }

  ngAfterViewChecked(): void {
    this.sessionUser = sessionStorage.getItem('session');
  }

}
