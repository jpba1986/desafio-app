import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model';
import { HttpClient }  from '@angular/common/http';

@Injectable({ providedIn:'root'})
export class ForecastService{

    private forecasts: Forecast[] = [
        new Forecast('SANTIAGO (CL)','14:00:00','40°',-33.448891, -70.669266)
    ]
    constructor(private http: HttpClient){}

    getForecast(){
        return this.forecasts.slice();
    }
    getForecast2(){
        return this.http.get(
            'https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/42.3601,-71.0589'
        );
    }
}