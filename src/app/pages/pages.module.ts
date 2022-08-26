import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { ARevisarComponent } from './a-revisar/a-revisar.component';
import { EnReparacionComponent } from './en-reparacion/en-reparacion.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ARevisarComponent,
    EnReparacionComponent
  ],
  exports: [
    DashboardComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
