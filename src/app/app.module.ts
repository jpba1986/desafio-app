import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ForecastComponent } from './pages/forecast/forecast.component';
import { ForecastListComponent } from './pages/forecast/forecast-list/forecast-list.component';
import { ForecastItemComponent } from './pages/forecast/forecast-item/forecast-item.component';

const appRoutes: Routes=[
  { path: '', redirectTo: '/forecast', pathMatch:'full'},
  { path: 'forecast', component: ForecastComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ForecastComponent,
    ForecastListComponent,
    ForecastItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
