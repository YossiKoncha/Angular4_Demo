import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.scss']
})
export class SimpleComponentComponent implements OnInit {

  public myName = 'my Simple Component ';

  constructor() { }

  ngOnInit() {
    setTimeout( ( )=> {
      this.myName ='this is me after timeout'
    },3000);
  }

}
