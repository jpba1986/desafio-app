import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model';
import { HttpClient }  from '@angular/common/http';
import { ErrorModel } from '../models/error.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn:'root'})
export class ForecastService{

    constructor(private http: HttpClient){}

    getKey(){
        return this.http.get(environment.urlService +'forecast/getKey');        
    }

    getLocations(location: string){
        return this.http.get(environment.urlService +'forecast/getLocations/'+ location);
    }

    getForecastData(latitud: number, longitud: number){
        return this.http.get<Forecast[]>(
            environment.urlService +'forecast/getForecastData/'+ latitud + ','+ longitud
        );
    }
    postDirections(forecasts: Forecast){
        return this.http
        .post(environment.urlService +'forecast/postDirections', forecasts);
    } 

    postSetStartLocations(){
        return this.http.post(
            environment.urlService +'forecast/postSetStartLocations',''
        );
    }

    postSaveError(err: ErrorModel ){
        return this.http
        .post(environment.urlService +'forecast/postSaveError', err  );
    }

}