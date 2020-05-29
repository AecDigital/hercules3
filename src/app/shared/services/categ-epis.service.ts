import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategEpis } from '../models/categ-epis.model';
import { Rest } from '../models/rest.model';

@Injectable({
  providedIn: 'root'
})
export class CategEpisService {
  constructor(private http: HttpClient) { }
  baseUrl = '/EulenPRL/rest/';

  getCategorias(): Observable<CategEpis> {
    return this.http.get<CategEpis>(this.baseUrl + 'mantenimientos/categoriasEpi');
  }

  createCategoria(categoria: object): Observable<Rest> {
    return this.http.post<Rest>(this.baseUrl + 'mantenimientos/categoriasEpi', categoria, { observe: 'response' });
  }

  updateCategoria(categoria: any): Observable<Rest> {
    return this.http.put<Rest>(this.baseUrl + 'mantenimientos/categoriasEpi', categoria, { observe: 'response' });
  }

  deleteCategoria(id: string): Observable<Rest> {
    return this.http.delete<Rest>(this.baseUrl + `mantenimientos/categoriasEpi/${id}`, {observe: 'response'});
  }
}
