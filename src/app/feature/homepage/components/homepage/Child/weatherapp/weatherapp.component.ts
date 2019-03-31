import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../../../../../core/services/weather-api.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.scss']
})
export class WeatherappComponent implements OnInit {
  
  weatherInfo;
  curCity: string;
  curTemp;
  sunrise;
  sunset;


  constructor(private _weatherapi: WeatherApiService) { }

  ngOnInit() {
    this._weatherapi.getWeather().subscribe(data => {
     
      this.weatherInfo = data;
      this.curCity = data.name;
      this.curTemp = Math.ceil((data.main.temp * (9/5)) - 459.67);
      this.sunrise = new Date(data.sys.sunrise*1000);
      this.sunset = new Date(data.sys.sunset*1000);
      
      console.log(this.curCity);
      console.log(this.curTemp);
      console.log(this.weatherInfo);
      console.log(this.sunrise.getHours(), this.sunset.getHours());
      
    });
  }

}
