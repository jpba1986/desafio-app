import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast.model';
import { HttpClient }  from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocationModel } from '../models/locations.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

@Injectable({ providedIn:'root'})
export class ForecastService{

    private locationsArray: LocationModel[] = [
        new LocationModel(-33.448891,-70.669266,'America/New_York')
    ];
    
    private forecasts: Forecast[] = [
        new Forecast('SANTIAGO (CL)','14:00:00','40°',-33.448891, -70.669266)
    ];

    constructor(private http: HttpClient){}

    
    getForecast(){
        return this.forecasts.slice();
    }

    getForecast2(latitud: number, longitud: number){
        return this.http.get<Forecast[]>(
            'http://localhost:8080/forecast/getForecastData'
        ).pipe(map( data => {
            return data;
        }));
    } 

    storeForecast(){
        const forecasts = this.getForecast();
        return this.http
        .post('http://localhost:8080/forecast/postDirections', forecasts)
        .subscribe(response =>{
            console.log(response);
        });
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