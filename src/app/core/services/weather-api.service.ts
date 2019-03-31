import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherApiService {
  url: string = 'https://api.openweathermap.org/data/2.5/weather?zip=11434,us&appid=b55b408123b025cb94aec4550a24680b';


  constructor(private _http: HttpClient) { }


  getWeather() {
    return this._http.get<any>(this.url);
  }

}
