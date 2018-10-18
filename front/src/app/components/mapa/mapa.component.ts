import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {
  title = 'ComuniTree';
  lat = -33.434925;
  lng = -70.615026;

  constructor() { }

  ngOnInit() {
  }
  markerIconUrl() {
    return require('./icon2.png');
  }
}
