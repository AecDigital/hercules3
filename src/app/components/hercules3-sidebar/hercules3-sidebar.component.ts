import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-hercules3-sidebar',
  templateUrl: './hercules3-sidebar.component.html',
  styleUrls: ['./hercules3-sidebar.component.scss']
})
export class Hercules3SidebarComponent implements OnInit {
  mode = new FormControl('over');
  public currentView: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (window.location.href.indexOf('login') > -1) {
      this.currentView = 'login'
    }
  }
}
