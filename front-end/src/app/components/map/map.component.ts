import { Component, OnInit } from '@angular/core';
import { TreesService } from '../../services/trees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'Mapa';
  tree: any[] = [];
  lat_init: number;
  lng_init: number;

  constructor(private _treesService: TreesService,
              private router: Router) {
    this.tree = this._treesService.getTrees();
    this.lat_init = this.tree[0].lat;
    this.lng_init = this.tree[0].lng;
  }
  ngOnInit() {
  }
  sendReport( idx: number ) {
    this.router.navigate( ['/sendreport', idx] );
  }
}
