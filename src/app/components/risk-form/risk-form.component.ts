import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-risk-form',
  templateUrl: './risk-form.component.html',
  styleUrls: ['./risk-form.component.scss']
})
export class RiskFormComponent implements OnInit {
  riskForm: FormGroup
  items = ['1', '2', '3'];
  constructor(private formBuilder: FormBuilder,
    ) { }

  ngOnInit(): void {
    this.riskForm = this.formBuilder.group({
      idRiesgo: ['', Validators.required],
      codigoRiesgo: ['', Validators.required],
      subCodigoRiesgo: ['', Validators.required],
      tema: ['', Validators.required],
      subTema: ['', Validators.required],
      medidas: ['', Validators.required]

  });
  }

  doSomething() {
    console.log('Hola')
    console.log(this.riskForm.value);
  }
}
