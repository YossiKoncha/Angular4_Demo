import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: './simple-component.component.html',
  styleUrls: ['./simple-component.component.scss']
})
export class SimpleComponentComponent implements OnInit {

  public title = 'my Simple Component ';

  public showMe = false;

  constructor() { }

  ngOnInit() {
    // setTimeout( ( )=> {
    //   this.title ='******************** this is me after timeout *************************'
    // },3000);
  }
}
