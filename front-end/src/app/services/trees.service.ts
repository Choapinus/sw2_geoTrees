import { Injectable } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class TreesService {

  private   trees: Tree[] = [
    {lat: -33.446947, lng: -70.679253},
    {lat: -33.446979, lng: -70.679297},
    {lat: -33.448042, lng: -70.679376},
    {lat: -33.448073, lng: -70.679377},
    {lat: -33.448127, lng: -70.679316}
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
  lat: number;
  lng: number;
}
