import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

/*mapboxgl.accessToken = 'undefined';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});*/

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css']
})
export class MapboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
