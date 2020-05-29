import { Injectable } from '@angular/core';
import { Rest } from '../models/rest.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminPartesCuerpo } from '../models/admin-partes-cuerpo.model';
@Injectable()
export class AdminPartesCuerpoService {

  constructor(private http: HttpClient) { }
  baseUrl = '/EulenPRL/rest/';
  getPartesCuerpo(): Observable<AdminPartesCuerpo> {
    return this.http.get<AdminPartesCuerpo>(this.baseUrl + 'mantenimientos/partescuerpo');
  }

  createPartesCuerpo(parteCuerpo: object): Observable<Rest> {
    return this.http.post<Rest>(this.baseUrl + 'mantenimientos/partescuerpo', parteCuerpo, { observe: 'response' });
  }

  updatePartesCuerpo(parteCuerpo: any): Observable<Rest> {
    return this.http.put<Rest>(this.baseUrl + 'mantenimientos/partescuerpo', parteCuerpo, { observe: 'response' });
  }

  deletePartesCuerpo(id: string): Observable<Rest> {
    return this.http.delete<Rest>(this.baseUrl + `mantenimientos/partescuerpo/${id}`, {observe: 'response'});
  }
}





