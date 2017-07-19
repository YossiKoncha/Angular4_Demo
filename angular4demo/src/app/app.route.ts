import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TabsComponent} from "./tabs/tabs.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {SimpleComponentComponent} from './simple-component/simple-component.component';

// Route Configuration
export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: TabsComponent,
    children: [
      { path: 'simpleComponent', component: SimpleComponentComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
