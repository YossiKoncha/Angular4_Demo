import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';


@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {
  public hotelsList = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  public getHotels() {
    const hotelsUrl = 'https://jsonblob.com/api/jsonBlob/3038c661-6c9a-11e7-a38a-81aa36aedc86';
    this.http.get(hotelsUrl)
      .subscribe((data: any[]) => {
        this.hotelsList = data;
      });
  }
}
