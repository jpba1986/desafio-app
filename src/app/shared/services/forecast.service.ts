import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model';
import { HttpClient, HttpHeaders }  from '@angular/common/http';
import { ErrorModel } from '../models/error.model';

@Injectable({ providedIn:'root'})
export class ForecastService{

    constructor(private http: HttpClient){}

    getKey(){
        return this.http.get('http://localhost:8080/forecast/getKey');        
    }

    getLocations(location: string){
        return this.http.get('http://localhost:8080/forecast/getLocations/'+ location);
    }

    getForecastData(latitud: number, longitud: number){
        return this.http.get<Forecast[]>(
            'http://localhost:8080/forecast/getForecastData/'+ latitud + ','+ longitud
        );
    }
    postDirections(forecasts: Forecast){
        return this.http
        .post('http://localhost:8080/forecast/postDirections', forecasts);
    } 

    postSetStartLocations(){
        return this.http.post(
            'http://localhost:8080/forecast/postSetStartLocations',''
        );
    }

    postSaveError(err: ErrorModel ){
        return this.http
        .post('http://localhost:8080/forecast/postSaveError', err  );
    }

}