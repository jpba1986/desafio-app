import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model';

@Injectable({ providedIn:'root'})
export class ForecastService{

    private forecasts: Forecast[] = [
        new Forecast('SANTIAGO (CL)','14:00:00','40°',-33.448891, -70.669266)
    ]
    constructor(){}

    getForecast(){
        return this.forecasts.slice();
    }
}