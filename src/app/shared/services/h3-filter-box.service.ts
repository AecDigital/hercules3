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

  getOptions = (searchType: string) => {
    switch (searchType) {
    case 'Clientes':
      return this.http.get(this.baseUrl + '/clientes/clientes', { observe: 'response' });
    case 'Ofertas':
      return this.http.get(this.baseUrl + '/consultas/consultaOfertas', { observe: 'response'});
    case 'Empresas':
      return this.http.get(this.baseUrl + '/mantenimientos/empresas', { observe: 'response'});
  }
}
  getEmpresa = (idEmpresa) => {
    return this.http.get(this.baseUrl + `/consultas/consultaEmpresas/${idEmpresa}`, { observe: 'response' });
  }
}
