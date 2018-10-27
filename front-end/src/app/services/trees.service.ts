import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';
import {RequestOptions, Request, Headers } from '@angular/http';

@Injectable()
export class TreesService {
  private  apiUrl = '';
  requestOptions = new RequestOptions({ headers: null, withCredentials: true });
  private   trees: Tree[] = [
    {id: 1, lat: -33.446947, lng: -70.679253},
    {id: 2, lat: -33.446979, lng: -70.679297},
    {id: 3, lat: -33.448042, lng: -70.679376},
    {id: 4, lat: -33.448073, lng: -70.679377},
    {id: 5, lat: -33.448127, lng: -70.679316}
  ];

  constructor(private http: HttpClient) {
    this.getTrees();
  }

  getTree(idx: number) {
    return this.trees[idx];
  }
  getTrees(): Tree[] {
    this.apiUrl = 'https://choapinus.pythonanywhere.com/arbol/all/';
    this.http.get(this.apiUrl).subscribe(data => {
      console.log(data);
    });
    return this.trees;
  }

}

export interface Tree {
  id: number;
  lat: number;
  lng: number;
}
