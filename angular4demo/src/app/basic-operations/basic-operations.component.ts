import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-operations',
  templateUrl: './basic-operations.component.html',
  styleUrls: ['./basic-operations.component.scss']
})
export class BasicOperationsComponent implements OnInit {
  hotelNameModel: string;
  hotelNameClickModel: string;

  hotelNameShow: string;
  hotelNameTemplate: string;

  constructor() {}

  ngOnInit() {
  }

  hotelNameClick(hotelName: string) {
    this.hotelNameShow = hotelName;
  }

  hotelNameChange(hotelName) {
    this.hotelNameTemplate = hotelName;
  }
}
