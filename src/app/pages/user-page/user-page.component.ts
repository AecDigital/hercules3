import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html'
})
export class UserPageComponent implements OnInit {


  showComponent = true;

  constructor() { }

  ngOnInit(): void {
  }

  setNoFooter() {
    this.showComponent = !this.showComponent;
  }

}
