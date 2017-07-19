import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdTableModule, MdTabsModule } from '@angular/material';
import {routing} from "./app.route";

import { AppComponent } from './app.component';
import { SimpleComponentComponent } from './simple-component/simple-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponentComponent,
    PageNotFoundComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTableModule,
    MdTabsModule,
    routing
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
