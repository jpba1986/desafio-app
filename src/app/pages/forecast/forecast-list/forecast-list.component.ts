import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/shared/services/forecast.service';
import { Forecast } from 'src/app/shared/models/forecast.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
})
export class ForecastListComponent implements OnInit {
  forecasts: Forecast[] = [];

  constructor(private forecastService: ForecastService,private router: Router) { }

  ngOnInit() {

    this.forecastService.getKeys()
    .subscribe(
      (res:any ) =>{
        for(let i = 0; i < res.data.length; i++){
          this.forecastService.getLocations(res.data[i]).subscribe(
            (response: any) => {
              this.forecasts.push(new Forecast (response.data.city, 
                                                response.data.hour, 
                                                response.data.temp ,
                                                response.data.lat, 
                                                response.data.lon, 
                                                response.data.id 
                                                ));
              this.router.navigate(['/forecast']);
            }
          );
        }
      }
    );
  }
}
