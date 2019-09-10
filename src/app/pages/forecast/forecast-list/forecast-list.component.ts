import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/shared/services/forecast.service';
import { Forecast } from 'src/app/shared/models/forecast.model';

@Component({
  selector: 'app-forecast-list',
  templateUrl: './forecast-list.component.html',
  styleUrls: ['./forecast-list.component.css']
})
export class ForecastListComponent implements OnInit {
  forecasts: Forecast[];

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    this.forecasts = this.forecastService.getForecast();
    //console.log(this.forecasts);
  }

}
