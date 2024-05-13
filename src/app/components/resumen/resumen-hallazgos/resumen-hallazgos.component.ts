import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resumen-hallazgos',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ButtonModule, TabViewModule, CommonModule],
  templateUrl: './resumen-hallazgos.component.html',
  styleUrl: './resumen-hallazgos.component.css'
})
export class ResumenHallazgosComponent {
  activeIndex: number = 0;
  complejos: {
    complejo: string, total: string, hallazgosTipo5: string, hallazgosTipo4: string, hallazgosTipo3: string, hallazgosTipo2: string,
    hallazgosTipo1: string, contenido: string, hallazgosTipoCM: string, hallazgosTipoCORR: string, hallazgosTipoDM: string,
    hallazgosTipoHC: string, hallazgosTipoINC: string, hallazgosTipoPC: string, hallazgosTipoIMP: string,
    hallazgosTipoRSR: string, hallazgosTipoS: string, actividadesMantenimiento: string, analisis: string,
    analisisSeguimiento: string, inspeccionSeguimientoHallazgos: string
  }[] = [];

  ngOnInit() {
    this.complejos = [
      {
        complejo: 'ABKATUN-A', total: '338', hallazgosTipo5: '6', hallazgosTipo4: '0', hallazgosTipo3: '26', hallazgosTipo2: '303',
        hallazgosTipo1: '3', contenido: 'dataAbkatunA', hallazgosTipoCM: '1', hallazgosTipoCORR: '35', hallazgosTipoDM: '55',
        hallazgosTipoHC: '238', hallazgosTipoINC: '1', hallazgosTipoPC: '4', hallazgosTipoIMP: '0', hallazgosTipoRSR: '3',
        hallazgosTipoS: '2', actividadesMantenimiento: '275', analisis: '39', analisisSeguimiento: '2', inspeccionSeguimientoHallazgos: '22'
      },
      {
        complejo: 'ABKATUN-D', total: '85', hallazgosTipo5: '1', hallazgosTipo4: '0', hallazgosTipo3: '9', hallazgosTipo2: '75',
        hallazgosTipo1: '0', contenido: 'dataAbkatunD', hallazgosTipoCM: '0', hallazgosTipoCORR: '13', hallazgosTipoDM: '9',
        hallazgosTipoHC: '62', hallazgosTipoINC: '0', hallazgosTipoPC: '0', hallazgosTipoIMP: '0', hallazgosTipoRSR: '1',
        hallazgosTipoS: '0', actividadesMantenimiento: '75', analisis: '2', analisisSeguimiento: '0', inspeccionSeguimientoHallazgos: '8'
      },
      {
        complejo: 'ABKATUN-N1', total: '117', hallazgosTipo5: '1', hallazgosTipo4: '0', hallazgosTipo3: '12', hallazgosTipo2: '97',
        hallazgosTipo1: '7', contenido: 'dataAbkatunN1', hallazgosTipoCM: '0', hallazgosTipoCORR: '19', hallazgosTipoDM: '5',
        hallazgosTipoHC: '84', hallazgosTipoINC: '5', hallazgosTipoPC: '2', hallazgosTipoIMP: '0', hallazgosTipoRSR: '1',
        hallazgosTipoS: '1', actividadesMantenimiento: '103', analisis: '6', analisisSeguimiento: '0', inspeccionSeguimientoHallazgos: '8'
      },
      {
        complejo: 'LITORAL', total: '644', hallazgosTipo5: '10', hallazgosTipo4: '2', hallazgosTipo3: '78', hallazgosTipo2: '534',
        hallazgosTipo1: '20', contenido: 'dataLitoral', hallazgosTipoCM: '2', hallazgosTipoCORR: '105', hallazgosTipoDM: '67',
        hallazgosTipoHC: '440', hallazgosTipoINC: '8', hallazgosTipoPC: '6', hallazgosTipoIMP: '1', hallazgosTipoRSR: '2',
        hallazgosTipoS: '13', actividadesMantenimiento: '550', analisis: '58', analisisSeguimiento: '8', inspeccionSeguimientoHallazgos: '28'
      },
      {
        complejo: 'POL-A', total: '433', hallazgosTipo5: '10', hallazgosTipo4: '0', hallazgosTipo3: '53', hallazgosTipo2: '358',
        hallazgosTipo1: '12', contenido: 'dataPolA', hallazgosTipoCM: '0', hallazgosTipoCORR: '57', hallazgosTipoDM: '37',
        hallazgosTipoHC: '303', hallazgosTipoINC: '7', hallazgosTipoPC: '9', hallazgosTipoIMP: '13', hallazgosTipoRSR: '4',
        hallazgosTipoS: '3', actividadesMantenimiento: '377', analisis: '28', analisisSeguimiento: '9', inspeccionSeguimientoHallazgos: '19'
      },

    ];
  }


}
