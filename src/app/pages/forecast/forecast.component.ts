import { Component, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/shared/services/forecast.service';
import { ErrorModel } from 'src/app/shared/models/error.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  isLoad= false;

  constructor(private forecastService: ForecastService) { }

  ngOnInit() {   
    if ((Math.floor(Math.random() * 10)/100) < 0.1 ) {     
    this.forecastService.postSaveError( new ErrorModel('How unfortunate! The API Request Failed')).subscribe();
    }else{
      this.forecastService.getKey()
      .subscribe(
        (data: any) =>{
          if (data.data.length > 0){          
            this.isLoad = true;
          }        
        }, error =>{
          throw error;
        });
    }
  }

  onLoad(){
    if ((Math.floor(Math.random() * 10)/100) < 0.1 ) {     
      this.forecastService.postSaveError( new ErrorModel('How unfortunate! The API Request Failed')).subscribe();
      }else{
        this.forecastService.postSetStartLocations().subscribe(
          () =>{
            this.isLoad = true;
          }
        );
      }
  }

}
