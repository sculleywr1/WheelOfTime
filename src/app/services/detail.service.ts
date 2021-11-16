import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Detail } from '../models/detail.model';

const baseUrl = 'http://localhost:9001/api/details';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Detail[]>
  {
    return this.http.get<Detail[]>(baseUrl);
  }

  get(id: any): Observable<Detail>
  {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any>
  {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any>
  {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any>
  {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  findByName(name: any): Observable<Detail[]>
  {
    return this.http.get<Detail[]>(`${baseUrl}?name=${name}`);
  }
}
