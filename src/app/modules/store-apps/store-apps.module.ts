import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreAppsRoutingModule } from './store-apps-routing.module';
import { AppListComponent } from './app-list/app-list.component';
import { AppDetailComponent } from './app-detail/app-detail.component';


@NgModule({
  declarations: [AppListComponent, AppDetailComponent],
  imports: [
    CommonModule,
    StoreAppsRoutingModule
  ]
})
export class StoreAppsModule { }
