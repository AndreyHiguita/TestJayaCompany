import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CityCoordinatesService {

    private configUrl: string = "https://api.mapbox.com/geocoding/v5/mapbox.places";
    private configToken: string = "pk.eyJ1IjoiamdhdmlyMjMiLCJhIjoiY2pwMzMwanYwMDJkeTNwcDduODR5bXRlayJ9.p_HLVm6sK-X0d5-JIpSdxA";

    constructor(private httpClient: HttpClient) { }

    getCoordinates( city ): Observable<any> {
        return this.httpClient.get(`${ this.configUrl }/${ city }.json?access_token=${ this.configToken }`);
    }

}
