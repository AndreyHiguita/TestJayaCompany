import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { CityCoordinatesService } from '../../services/city-coordinates/city-coordinates.service';
import { CityWeatherService } from '../../services/city-weather/city-weather.service';

@Component( {
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: [ './search.component.css' ]
} )
export class SearchComponent implements OnInit {

    city: string = "Medellín, Antioquia, Colombia";
    cityWeather: any;
    cityInfo: any;

    constructor( private coordinatesService: CityCoordinatesService, private weatherService: CityWeatherService ) {
        
    }

    eventSearch(){
        if(this.city.length < 3)
            return;

        this.getCoordinates();
    }

    getCoordinates(){
        this.coordinatesService.getCoordinates( this.city ).subscribe( result =>{
            let coordinates = result.features[0].geometry.coordinates;
            this.city = result.features[0].place_name;
            this.cityInfo = result;
            this.getWeather(coordinates);
        }, error => {
            console.log(JSON.stringify(error));
        } );
    }

    getWeather(coordinates){
        this.weatherService.getWeather(coordinates[1], coordinates[0]).subscribe( result =>{
            this.cityWeather = result;
        }, error => {
            console.log(JSON.stringify(error));
        } );
    }

    ngOnInit() {
        this.eventSearch();
    }

}