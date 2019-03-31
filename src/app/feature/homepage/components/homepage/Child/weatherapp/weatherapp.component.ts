import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../../../../../core/services/weather-api.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.scss']
})
export class WeatherappComponent implements OnInit {

  currentCity: string = "New York City"; 

  constructor(private _weatherapi: WeatherApiService) { }

  ngOnInit() {
    this._weatherapi.getWeather().subscribe(x => console.log(x));
  }

}
