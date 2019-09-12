import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from 'src/app/shared/models/forecast.model';
import { ForecastService } from 'src/app/shared/services/forecast.service';
import { ErrorModel } from 'src/app/shared/models/error.model';
import { environment } from 'src/environments/environment';

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
    if ((Math.floor(Math.random() * 10)/100) < 0.1 ) {     
      this.forecastService.postSaveError( new ErrorModel(environment.ErrorMessage)).subscribe();
      }else{
        this.forecastService.getForecastData(this.forecast.latitude, this.forecast.longitude).subscribe(
          (response: any) => {
            console.log(response);
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
                }, 300000);
             }
            );
          }
        );  
      }
  }
}
