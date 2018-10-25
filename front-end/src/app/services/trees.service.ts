import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class TreesService {

  private   trees: Tree[] = [
    {id: 1, lat: -33.446947, lng: -70.679253},
    {id: 2, lat: -33.446979, lng: -70.679297},
    {id: 3, lat: -33.448042, lng: -70.679376},
    {id: 4, lat: -33.448073, lng: -70.679377},
    {id: 5, lat: -33.448127, lng: -70.679316}
  ];

  constructor() { }

  getTree(idx: number) {
    return this.trees[idx];
  }

  getTrees(): Tree[] {
    return this.trees;
  }

}

export interface Tree {
  id: number;
  lat: number;
  lng: number;
}
