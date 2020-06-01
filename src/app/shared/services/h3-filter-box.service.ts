import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class H3FilterBoxService {
  baseUrl = '/EulenPRL/rest/';

  constructor(
    private http: HttpClient
  ) { }

  getCustomers = () => {
    return this.http.get(this.baseUrl + '/clientes/clientes', { observe: 'response' });
}
  getProposals = () => {
    return this.http.get(this.baseUrl + '/consultas/consultaOfertas', { observe: 'response'});
  }

  getCompanies = () => {
    return this.http.get(this.baseUrl + '/consultas/consultaEmpresas', { observe: 'response'});
  }
}
