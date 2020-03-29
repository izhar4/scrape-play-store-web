import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';
import { AppDetailComponent } from './app-detail/app-detail.component';


const routes: Routes = [{
  path: '',
  component: AppListComponent
}, {
  path: ':appId',
  component: AppDetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreAppsRoutingModule { }
