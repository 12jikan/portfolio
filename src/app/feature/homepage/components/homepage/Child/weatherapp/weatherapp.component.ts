import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.scss']
})
export class WeatherappComponent implements OnInit {

  currentCity: string = "New York City"; 

  constructor() { }

  ngOnInit() {
  }

}
