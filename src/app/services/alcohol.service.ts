import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alcohol } from '../models/alcohol.model';

const baseUrl = 'http://localhost:1111/api/alcohol/alcohols';

@Injectable({
  providedIn: 'root'
})
export class AlcoholService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alcohol[]> {
    return this.http.get<Alcohol[]>(baseUrl);
  }

  get(id: any): Observable<Alcohol> {
    return this.http.get('${baseUrl}/alcohol/${id}');
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put('${baseUrl}/alcohol/${id}', data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete('${baseUrl}/alcohol/${id}');
  }

  findByName(name: any): Observable<Alcohol> {
    return this.http.get('${baseUrl}/${name}');
  }
}
