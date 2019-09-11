import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model';
import { HttpClient }  from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocationModel } from '../models/locations.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

@Injectable({ providedIn:'root'})
export class ForecastService{

    constructor(private http: HttpClient){}

    getForecast2(latitud: number, longitud: number){
        return this.http.get<Forecast[]>(
            'http://localhost:8080/forecast/getForecastData/'+ latitud + ','+ longitud
        );
    } 

    storeForecast(forecasts: Forecast){
        return this.http
        .post('http://localhost:8080/forecast/postDirections', forecasts);
    } 

    getKeys(){
        return this.http.get('http://localhost:8080/forecast/getKey');        
    }

    getLocations(location: string){
        return this.http.get('http://localhost:8080/forecast/getLocations/'+ location);
    }

    setStartlocations(){
        return this.http.post(
            'http://localhost:8080/forecast/setStartLocations',''
        );
    }

}