import {Component} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  public navLinks = ['simpleComponent','L2','L3','hotelLists'];
  constructor() {
  }

}
