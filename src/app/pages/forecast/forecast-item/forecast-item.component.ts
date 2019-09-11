import { Component, OnInit, Input, AfterContentInit } from '@angular/core';
import { Forecast } from 'src/app/shared/models/forecast.model';
import { ForecastService } from 'src/app/shared/services/forecast.service';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent implements OnInit  {
  forecasts: Forecast[] = [];
  @Input() forecast: Forecast;

  constructor(private forecastService : ForecastService) { }

  ngOnInit() {
    this.forecastService.getForecastData(this.forecast.latitude, this.forecast.longitude).subscribe(
      (response: any) => {
        let data: Forecast = new Forecast('',
                                          response.currently.time , 
                                          response.currently.temperature, 
                                          response.latitude,
                                          response.longitude, 
                                          this.forecast.key );                                        
        this.forecastService.postDirections(data).subscribe(
          ()=>{
            setTimeout(() => {
              window.location.reload();
            }, 10000);
          }
        );
      }
    );    
  }
}
