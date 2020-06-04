import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RiskTableComponent } from '../risk-table/risk-table.component';

@Component({
  selector: 'app-consulta-riesgos',
  templateUrl: './consulta-riesgos.component.html',
  styleUrls: ['./consulta-riesgos.component.scss']
})
export class ConsultaRiesgosComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

}
