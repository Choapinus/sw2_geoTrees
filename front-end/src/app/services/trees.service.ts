import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TreesService {
  private  apiUrl = '';
  headers = new Headers();
  private   trees: any;
  private info = {
    data: ''
  };
  constructor(private http: HttpClient) {
  }

  getTree(idx: number): Observable<any> {
    return this.http.get('http://comunitree.tk:8081/arbol/' + idx + '/');
  }
  getUsers(): Observable<any> {
    return this.http.get('http://comunitree.tk:8080/api/v1/users/');
  }
  getTrees(): Observable<any> {
    return this.http.get('http://comunitree.tk:8081/arbol/all/');
  }

  addUser(user): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
          return this.http.post('http://comunitree.tk:8080/api/v1/users/', user);
  }

  addReport(report): Observable<any> {
      const headers = new Headers({ 'Content-Type': 'application/json' });
            return this.http.post('http://comunitree.tk:8080/api/v1/reports/create/', report);
  }
}

export interface Tree {
  id: number;
  lat: number;
  lng: number;
}
