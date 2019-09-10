import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { ForecastListComponent } from './pages/forecast/forecast-list/forecast-list.component';
import { ForecastDetailComponent } from './pages/forecast/forecast-detail/forecast-detail.component';

const appRoutes: Routes=[
  { path: '', redirectTo: '/', pathMatch:'full'},
  { path: 'forecast', component: ForecastComponent,
    children:[
      {path: 'id', component:ForecastDetailComponent}
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    ForecastListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
