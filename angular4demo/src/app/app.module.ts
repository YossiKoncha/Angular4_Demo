import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdTableModule, MdTabsModule, MdInputModule, MdCardModule } from '@angular/material';
import { routing } from './app.route';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SimpleComponentComponent } from './simple-component/simple-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TabsComponent } from './tabs/tabs.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { NgForLoopComponent } from './ng-for-loop/ng-for-loop.component';
import { BasicOperationsComponent } from './basic-operations/basic-operations.component';
import { GetStatedComponent } from './get-stated/get-stated.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponentComponent,
    PageNotFoundComponent,
    TabsComponent,
    HotelsListComponent,
    NgForLoopComponent,
    BasicOperationsComponent,
    GetStatedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTableModule,
    MdTabsModule,
    MdCardModule,
    routing,
    HttpClientModule,
    MdInputModule,
    MdButtonModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
