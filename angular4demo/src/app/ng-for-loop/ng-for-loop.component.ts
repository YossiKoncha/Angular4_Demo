import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-ng-for-loop',
  templateUrl: './ng-for-loop.component.html',
  styleUrls: ['./ng-for-loop.component.scss']
})
export class NgForLoopComponent implements OnInit {
  hotelsName: any[];

  constructor() { }

  ngOnInit() {
    this.hotelsName = [
      'A Hotel Leonardo',
      'Marriot',
      'Four Seasons',
      'Dan Panorama',
      'Intercontinental Tokyo',
      'Astor On The park',
      'Clarion INN',
      'Ritz Carlton Sao Paulo'
    ];
  }

  addHotelName(hotelName: string) {
    if (hotelName) {
      this.hotelsName.push(hotelName);
    }
  }
}
