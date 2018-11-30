import { Injectable } from '@angular/core';
import { ThrowStmt, analyzeAndValidateNgModules } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import {RequestOptions, Request, Headers, RequestMethod } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Observable, forkJoin } from 'rxjs';

@Injectable()
export class TreesService {
  private  apiUrl = '';
  requestOptions = new RequestOptions({ headers: null, withCredentials: true });
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
    let headers = new Headers({ 'Content-Type': 'application/json' });
          let options = new RequestOptions({ headers: headers });
          return this.http.post('http://comunitree.tk:8080/api/v1/users/', user, options);
  }

  addReport(report): Observable<any> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            return this.http.post('http://www.comunitree.tk:8080/api/v1/reports/create/', report, options);
  }


  public extractData(res) {
    let body = res.json();
      console.log("ACA EL PAYLOAD"+ body);
      return body || {};
  }
  private handleErrorPromise (error: any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}

export interface Tree {
  id: number;
  lat: number;
  lng: number;
}
