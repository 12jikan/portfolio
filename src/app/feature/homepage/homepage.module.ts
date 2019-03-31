import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Homepage Components //
import { HomepageComponent } from './components/homepage/homepage.component';
import { BannerComponent } from './components/homepage/Child/banner/banner.component';
import { SubbannerComponent } from './components/homepage/child/banner/subbanner/subbanner.component';
import { WeatherappComponent } from './components/homepage/Child/weatherapp/weatherapp.component';
import { TemperatureComponent } from './components/homepage/Child/weatherapp/temperature/temperature.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: '', component: WeatherappComponent },
]

@NgModule({
  declarations: [
    HomepageComponent,
    BannerComponent, 
    SubbannerComponent, 
    WeatherappComponent, 
    TemperatureComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class HomepageModule { }
