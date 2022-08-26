import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ARevisarComponent } from './a-revisar/a-revisar.component';
import { EnReparacionComponent } from './en-reparacion/en-reparacion.component';


const routes: Routes = [
    {   path: 'dashboard', component: PagesComponent,
        children: [
            {path: '', component: DashboardComponent, data: { titulo: 'Dashboard'}},
            {path: 'a-revisar', component: ARevisarComponent, data: { titulo: 'Vehículos a Revisar'}},
            {path: 'en-reparacion', component: EnReparacionComponent, data: { titulo: 'Vehículos en reparación'}},
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class PagesRoutingModule {}