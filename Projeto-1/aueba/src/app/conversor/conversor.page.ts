import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {
  celsius:    0;
  fahrenheit: 0;
  constructor() { }
    converter(){
      this.fahrenheit = (this.celsius * 1.8) + 32;
    }
  ngOnInit() {
  }

}
