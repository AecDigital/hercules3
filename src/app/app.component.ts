import { Component, OnInit } from '@angular/core';
import { User } from './shared/models/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hercules3-client';
  sessionUser: User
  public currentView: string;


  ngOnInit() {
    this.sessionUser = JSON.parse(sessionStorage.getItem("session"));
  }
}

