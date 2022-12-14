import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

    menu: any[] = [
      {
        titulo: 'Dashboard',
        icono: 'mdi mdi-gauge',
        submenu: [
          {titulo: 'Principal', url: '/'},
          {titulo: 'Vehículos a revisar', url: 'a-revisar'},
          {titulo: 'Vehículos en reparación', url: 'en-reparacion'},
        ]
      }
    ];

  constructor() { }
}
