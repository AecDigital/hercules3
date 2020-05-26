import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  @Input() showFooter = true;

  constructor() { }

  ngOnInit(): void {
  }

}
