import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CityWeatherService {

    private configUrl: string = "https://api.darksky.net/forecast";
    private configToken: string = "88030114c5e47763a011a75e7a10c633";

    constructor(private httpClient: HttpClient) { }

    getWeather( latitude, longitude ): Observable<any> {
        let headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
        return this.httpClient.get(`${ this.configUrl }/${ this.configToken }/${ latitude },${ longitude }`, { headers: headers });
    }

}
