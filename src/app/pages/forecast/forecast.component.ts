import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/shared/services/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  isLoad= false;

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {
    this.forecastService.getKeys()
    .subscribe(
      (data: any) =>{
        if (data.data.length > 0){          
          this.isLoad = true;
        }        
      }, error =>{
        throw error;
      });

  }

  onLoad(){
        this.forecastService.setStartlocations().subscribe(
          () =>{
            this.isLoad = true;
          }
        );
  }

}
