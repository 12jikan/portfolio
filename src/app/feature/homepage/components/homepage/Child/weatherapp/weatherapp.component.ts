import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../../../../../core/services/weather-api.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.scss']
})
export class WeatherappComponent implements OnInit {

  constructor(private _weatherapi: WeatherApiService) { }

  ngOnInit() {
    this._weatherapi.getWeather().subscribe(x => console.log(x));
  }

}
