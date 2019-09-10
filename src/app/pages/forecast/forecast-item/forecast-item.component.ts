import { Component, OnInit, Input } from '@angular/core';
import { Forecast } from 'src/app/shared/models/forecast.model';

@Component({
  selector: 'app-forecast-item',
  templateUrl: './forecast-item.component.html',
  styleUrls: ['./forecast-item.component.css']
})
export class ForecastItemComponent implements OnInit {

  @Input() forecast: Forecast;

  constructor() { }

  ngOnInit() {
  }

}
