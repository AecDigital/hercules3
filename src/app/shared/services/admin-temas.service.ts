import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminTema } from '../models/admin-tema.model';
import { Rest } from '../models/rest.model';

@Injectable()
export class AdminTemasService {

  constructor(private http: HttpClient) { }
  baseUrl = '/EulenPRL/rest/';

  getTemas(): Observable<AdminTema> {
    return this.http.get<AdminTema>(this.baseUrl + 'mantenimientos/temas');
  }

  createTema(tema: object): Observable<Rest> {
    return this.http.post<Rest>(this.baseUrl + 'mantenimientos/temas', tema, { observe: 'response' });
  }

  updateTema(tema: any): Observable<Rest> {
    return this.http.put<Rest>(this.baseUrl + 'mantenimientos/temas', tema, { observe: 'response' });
  }

  deleteTema(id: string): Observable<Rest> {
    return this.http.delete<Rest>(this.baseUrl + `mantenimientos/temas/${id}`, {observe: 'response'});
  }
}
