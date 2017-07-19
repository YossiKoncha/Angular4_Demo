import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdTableModule, MdTabsModule} from '@angular/material';
import {routing} from "./app.route";
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SimpleComponentComponent } from './simple-component/simple-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabsComponent } from './tabs/tabs.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponentComponent,
    PageNotFoundComponent,
    TabsComponent,
    HotelsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTableModule,
    MdTabsModule,
    routing,
    HttpClientModule,
    MdButtonModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
