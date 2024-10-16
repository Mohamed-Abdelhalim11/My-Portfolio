import { Component, OnInit } from '@angular/core';
import Typed, { TypedOptions } from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  titleHome: string = 'Frontend Developer';

  constructor() {}

  ngOnInit(): void {
    var options = {
      strings: ['','Frontend Developer'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

}
