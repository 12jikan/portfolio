import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-subbanner',
  templateUrl: './subbanner.component.html',
  styleUrls: ['./subbanner.component.scss']
})
export class SubbannerComponent implements OnInit {

  typed;
  options: object = {
    strings: [
      "I am ^1000 a Creator", 
      "I am a Designer",
      "I am a Front End Developer^1000",
    ],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,

  };

  constructor() { }

  ngOnInit() {
    this.typed = new Typed('#bannerSubtitle', this.options);
  }

}
