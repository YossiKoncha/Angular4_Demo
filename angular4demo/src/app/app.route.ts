import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SimpleComponentComponent } from './simple-component/simple-component.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { NgForLoopComponent } from './ng-for-loop/ng-for-loop.component';
import { BasicOperationsComponent } from './basic-operations/basic-operations.component';
import { GetStatedComponent } from './get-stated/get-stated.component';
import {TheEndComponent} from "./the-end/the-end.component";

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: TabsComponent,
    children: [
      { path: 'getStarted', component: GetStatedComponent },
      { path: 'simpleComponent', component: SimpleComponentComponent },
      { path: 'basicOperations', component: BasicOperationsComponent },
      { path: 'ngForLoop', component: NgForLoopComponent },
      { path: 'hotelLists', component: HotelsListComponent },
      { path: 'theEnd', component: TheEndComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
