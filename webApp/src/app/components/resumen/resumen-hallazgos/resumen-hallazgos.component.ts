import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-resumen-hallazgos',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ButtonModule, TabViewModule, CommonModule, ChartModule],
  templateUrl: './resumen-hallazgos.component.html',
  styleUrl: './resumen-hallazgos.component.css'
})
export class ResumenHallazgosComponent implements OnInit {
  //Para moverse entre secciones
  activeIndex: number = 0;
  hallazgosAbkatunA: any;
  hallazgosAbkatunD: any;
  hallazgosAbkatunN1: any;
  Litoral: any;
  PolA: any;
  tiposHallazgosAbkatunA: any;
  tiposHallazgosAbkatunD: any;
  tiposHallazgosAbkatunN1: any;
  tiposHallazgosLitoral: any;
  tiposHallazgosPolA: any;
  accionCorrectivaAbkatunA: any;
  accionCorrectivaAbkatunD: any;
  accionCorrectivaAbkatunN1: any;
  accionCorrectivaLitoral: any;
  accionCorrectivaPolA: any;
  //Graficas horizontales
  options: any;
  //Arreglo tipo JSON que contiene la informacion de cada complejo
  complejos: {
    complejo: string, total: string, hallazgosTipo5: string, hallazgosTipo4: string, hallazgosTipo3: string, hallazgosTipo2: string,
    hallazgosTipo1: string, contenido: string, hallazgosTipoCM: string, hallazgosTipoCORR: string, hallazgosTipoDM: string,
    hallazgosTipoHC: string, hallazgosTipoINC: string, hallazgosTipoPC: string, hallazgosTipoIMP: string,
    hallazgosTipoRSR: string, hallazgosTipoS: string, actividadesMantenimiento: string, analisis: string,
    analisisSeguimiento: string, inspeccionSeguimientoHallazgos: string
  }[] = [];

  ngOnInit() {
    //Variables para colores y de las tablas.
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    //Opciones de informacion para cada complejo
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

    this.hallazgosAbkatunA = {
      labels: ['Hallazgos'],

      datasets: [
        {
          label: 'Nivel 1',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [3]
        },
        {
          label: 'Nivel 2',
          backgroundColor: documentStyle.getPropertyValue('--pink-300'),
          borderColor: documentStyle.getPropertyValue('--pink-300'),
          data: [303]
        },
        {
          label: 'Nivel 3',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [26]
        },
        {
          label: 'Nivel 4',
          backgroundColor: documentStyle.getPropertyValue('--orange-300'),
          borderColor: documentStyle.getPropertyValue('--orange-300'),
          data: [0]
        },
        {
          label: 'Nivel 5',
          backgroundColor: documentStyle.getPropertyValue('--red-300'),
          borderColor: documentStyle.getPropertyValue('--red-300'),
          data: [6]
        },
      ],
    };

    this.tiposHallazgosAbkatunA = {
      labels: ['Tipos de Hallazgos'],
      datasets: [
        {
          label: 'CM',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [1]
        },
        {
          label: 'CORR',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          borderColor: documentStyle.getPropertyValue('--green-300'),
          data: [35]
        },
        {
          label: 'DM',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [55]
        },
        {
          label: 'HC',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          data: [238]
        },
        {
          label: 'H/V',
          backgroundColor: documentStyle.getPropertyValue('--pink-300'),
          borderColor: documentStyle.getPropertyValue('--pink-300'),
          data: [1]
        },
        {
          label: 'PC',
          backgroundColor: documentStyle.getPropertyValue('--indigo-300'),
          borderColor: documentStyle.getPropertyValue('--indigo-300'),
          data: [4]
        },
        {
          label: 'IMP',
          backgroundColor: documentStyle.getPropertyValue('--teal-300'),
          borderColor: documentStyle.getPropertyValue('--teal-300'),
          data: [0]
        },
        {
          label: 'RSR',
          backgroundColor: documentStyle.getPropertyValue('--bluegray-300'),
          borderColor: documentStyle.getPropertyValue('--bluegray-300'),
          data: [3]
        },
        {
          label: 'S',
          backgroundColor: documentStyle.getPropertyValue('--purple-300'),
          borderColor: documentStyle.getPropertyValue('--purple-300'),
          data: [2]
        },
      ]
    };

    this.accionCorrectivaAbkatunA = {
      labels: ['Acciones correctivas'],
      datasets: [
        {
          label: 'Mantenimiento',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [275]
        },
        {
          label: 'A/I',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          borderColor: documentStyle.getPropertyValue('--green-300'),
          data: [39]
        },
        {
          label: 'A/I/Ins/Seg',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [2]
        },
        {
          label: 'I/S',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          data: [22]
        },
      ]
    };

    this.hallazgosAbkatunD = {
      labels: ['Hallazgos'],
      datasets: [
        {
          label: 'Nivel 1',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [0]
        },
        {
          label: 'Nivel 2',
          backgroundColor: documentStyle.getPropertyValue('--pink-300'),
          borderColor: documentStyle.getPropertyValue('--pink-300'),
          data: [75]
        },
        {
          label: 'Nivel 3',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [9]
        },
        {
          label: 'Nivel 4',
          backgroundColor: documentStyle.getPropertyValue('--orange-300'),
          borderColor: documentStyle.getPropertyValue('--orange-300'),
          data: [0]
        },
        {
          label: 'Nivel 5',
          backgroundColor: documentStyle.getPropertyValue('--red-300'),
          borderColor: documentStyle.getPropertyValue('--red-300'),
          data: [1]
        },
      ]
    };

    this.tiposHallazgosAbkatunD = {
      labels: ['Tipos de Hallazgos'],
      datasets: [
        {
          label: 'CM',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [0]
        },
        {
          label: 'CORR',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          borderColor: documentStyle.getPropertyValue('--green-300'),
          data: [13]
        },
        {
          label: 'DM',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [9]
        },
        {
          label: 'HC',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          data: [62]
        },
        {
          label: 'H/V',
          backgroundColor: documentStyle.getPropertyValue('--pink-300'),
          borderColor: documentStyle.getPropertyValue('--pink-300'),
          data: [0]
        },
        {
          label: 'PC',
          backgroundColor: documentStyle.getPropertyValue('--indigo-300'),
          borderColor: documentStyle.getPropertyValue('--indigo-300'),
          data: [0]
        },
        {
          label: 'IMP',
          backgroundColor: documentStyle.getPropertyValue('--teal-300'),
          borderColor: documentStyle.getPropertyValue('--teal-300'),
          data: [0]
        },
        {
          label: 'RSR',
          backgroundColor: documentStyle.getPropertyValue('--bluegray-300'),
          borderColor: documentStyle.getPropertyValue('--bluegray-300'),
          data: [1]
        },
        {
          label: 'S',
          backgroundColor: documentStyle.getPropertyValue('--purple-300'),
          borderColor: documentStyle.getPropertyValue('--purple-300'),
          data: [0]
        },
      ]
    };

    this.accionCorrectivaAbkatunD = {
      labels: ['Acciones correctivas'],
      datasets: [
        {
          label: 'Mantenimiento',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [75]
        },
        {
          label: 'A/I',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          borderColor: documentStyle.getPropertyValue('--green-300'),
          data: [2]
        },
        {
          label: 'A/I/Ins/Seg',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [0]
        },
        {
          label: 'I/S',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          data: [8]
        },
      ]
    };


    this.hallazgosAbkatunN1 = {
      labels: ['Hallazgos'],
      datasets: [
        {
          label: 'Nivel 1',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [7]
        },
        {
          label: 'Nivel 2',
          backgroundColor: documentStyle.getPropertyValue('--pink-300'),
          borderColor: documentStyle.getPropertyValue('--pink-300'),
          data: [97]
        },
        {
          label: 'Nivel 3',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [12]
        },
        {
          label: 'Nivel 4',
          backgroundColor: documentStyle.getPropertyValue('--orange-300'),
          borderColor: documentStyle.getPropertyValue('--orange-300'),
          data: [0]
        },
        {
          label: 'Nivel 5',
          backgroundColor: documentStyle.getPropertyValue('--red-300'),
          borderColor: documentStyle.getPropertyValue('--red-300'),
          data: [1]
        },
      ]
    };

    this.tiposHallazgosAbkatunN1 = {
      labels: ['Tipos de Hallazgos'],
      datasets: [
        {
          label: 'CM',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [0]
        },
        {
          label: 'CORR',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          borderColor: documentStyle.getPropertyValue('--green-300'),
          data: [19]
        },
        {
          label: 'DM',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [5]
        },
        {
          label: 'HC',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          data: [84]
        },
        {
          label: 'H/V',
          backgroundColor: documentStyle.getPropertyValue('--pink-300'),
          borderColor: documentStyle.getPropertyValue('--pink-300'),
          data: [5]
        },
        {
          label: 'PC',
          backgroundColor: documentStyle.getPropertyValue('--indigo-300'),
          borderColor: documentStyle.getPropertyValue('--indigo-300'),
          data: [2]
        },
        {
          label: 'IMP',
          backgroundColor: documentStyle.getPropertyValue('--teal-300'),
          borderColor: documentStyle.getPropertyValue('--teal-300'),
          data: [0]
        },
        {
          label: 'RSR',
          backgroundColor: documentStyle.getPropertyValue('--bluegray-300'),
          borderColor: documentStyle.getPropertyValue('--bluegray-300'),
          data: [1]
        },
        {
          label: 'S',
          backgroundColor: documentStyle.getPropertyValue('--purple-300'),
          borderColor: documentStyle.getPropertyValue('--purple-300'),
          data: [1]
        },
      ]
    };

    this.accionCorrectivaAbkatunN1 = {
      labels: ['Acciones correctivas'],
      datasets: [
        {
          label: 'Mantenimiento',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [103]
        },
        {
          label: 'A/I',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          borderColor: documentStyle.getPropertyValue('--green-300'),
          data: [6]
        },
        {
          label: 'A/I/Ins/Seg',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [0]
        },
        {
          label: 'I/S',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          data: [8]
        },
      ]
    };

    this.Litoral = {
      labels: ['Hallazgos'],
      datasets: [
        {
          label: 'Nivel 1',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [20]
        },
        {
          label: 'Nivel 2',
          backgroundColor: documentStyle.getPropertyValue('--pink-300'),
          borderColor: documentStyle.getPropertyValue('--pink-300'),
          data: [534]
        },
        {
          label: 'Nivel 3',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [78]
        },
        {
          label: 'Nivel 4',
          backgroundColor: documentStyle.getPropertyValue('--orange-300'),
          borderColor: documentStyle.getPropertyValue('--orange-300'),
          data: [2]
        },
        {
          label: 'Nivel 5',
          backgroundColor: documentStyle.getPropertyValue('--red-300'),
          borderColor: documentStyle.getPropertyValue('--red-300'),
          data: [10]
        },
      ]
    };


    this.tiposHallazgosLitoral = {
      labels: ['Tipos de Hallazgos'],
      datasets: [
        {
          label: 'CM',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [2]
        },
        {
          label: 'CORR',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          borderColor: documentStyle.getPropertyValue('--green-300'),
          data: [105]
        },
        {
          label: 'DM',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [67]
        },
        {
          label: 'HC',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          data: [440]
        },
        {
          label: 'H/V',
          backgroundColor: documentStyle.getPropertyValue('--pink-300'),
          borderColor: documentStyle.getPropertyValue('--pink-300'),
          data: [8]
        },
        {
          label: 'PC',
          backgroundColor: documentStyle.getPropertyValue('--indigo-300'),
          borderColor: documentStyle.getPropertyValue('--indigo-300'),
          data: [6]
        },
        {
          label: 'IMP',
          backgroundColor: documentStyle.getPropertyValue('--teal-300'),
          borderColor: documentStyle.getPropertyValue('--teal-300'),
          data: [1]
        },
        {
          label: 'RSR',
          backgroundColor: documentStyle.getPropertyValue('--bluegray-300'),
          borderColor: documentStyle.getPropertyValue('--bluegray-300'),
          data: [2]
        },
        {
          label: 'S',
          backgroundColor: documentStyle.getPropertyValue('--purple-300'),
          borderColor: documentStyle.getPropertyValue('--purple-300'),
          data: [13]
        },
      ]
    };

    this.accionCorrectivaLitoral = {
      labels: ['Acciones correctivas'],
      datasets: [
        {
          label: 'Mantenimiento',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [550]
        },
        {
          label: 'A/I',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          borderColor: documentStyle.getPropertyValue('--green-300'),
          data: [58]
        },
        {
          label: 'A/I/Ins/Seg',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [8]
        },
        {
          label: 'I/S',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          data: [28]
        },
      ]
    };

    this.PolA = {
      labels: ['Hallazgos'],
      datasets: [
        {
          label: 'Nivel 1',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [12]
        },
        {
          label: 'Nivel 2',
          backgroundColor: documentStyle.getPropertyValue('--pink-300'),
          borderColor: documentStyle.getPropertyValue('--pink-300'),
          data: [358]
        },
        {
          label: 'Nivel 3',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [53]
        },
        {
          label: 'Nivel 4',
          backgroundColor: documentStyle.getPropertyValue('--orange-300'),
          borderColor: documentStyle.getPropertyValue('--orange-300'),
          data: [0]
        },
        {
          label: 'Nivel 5',
          backgroundColor: documentStyle.getPropertyValue('--red-300'),
          borderColor: documentStyle.getPropertyValue('--red-300'),
          data: [10]
        },
      ]
    };

    this.tiposHallazgosPolA = {
      labels: ['Tipos de Hallazgos'],
      datasets: [
        {
          label: 'CM',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [0]
        },
        {
          label: 'CORR',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          borderColor: documentStyle.getPropertyValue('--green-300'),
          data: [57]
        },
        {
          label: 'DM',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [37]
        },
        {
          label: 'HC',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          data: [303]
        },
        {
          label: 'H/V',
          backgroundColor: documentStyle.getPropertyValue('--pink-300'),
          borderColor: documentStyle.getPropertyValue('--pink-300'),
          data: [7]
        },
        {
          label: 'PC',
          backgroundColor: documentStyle.getPropertyValue('--indigo-300'),
          borderColor: documentStyle.getPropertyValue('--indigo-300'),
          data: [9]
        },
        {
          label: 'IMP',
          backgroundColor: documentStyle.getPropertyValue('--teal-300'),
          borderColor: documentStyle.getPropertyValue('--teal-300'),
          data: [13]
        },
        {
          label: 'RSR',
          backgroundColor: documentStyle.getPropertyValue('--bluegray-300'),
          borderColor: documentStyle.getPropertyValue('--bluegray-300'),
          data: [4]
        },
        {
          label: 'S',
          backgroundColor: documentStyle.getPropertyValue('--purple-300'),
          borderColor: documentStyle.getPropertyValue('--purple-300'),
          data: [3]
        },
      ]
    };

    this.accionCorrectivaPolA = {
      labels: ['Acciones correctivas'],
      datasets: [
        {
          label: 'Mantenimiento',
          backgroundColor: documentStyle.getPropertyValue('--blue-300'),
          borderColor: documentStyle.getPropertyValue('--blue-300'),
          data: [377]
        },
        {
          label: 'A/I',
          backgroundColor: documentStyle.getPropertyValue('--green-300'),
          borderColor: documentStyle.getPropertyValue('--green-300'),
          data: [28]
        },
        {
          label: 'A/I/Ins/Seg',
          backgroundColor: documentStyle.getPropertyValue('--yellow-300'),
          borderColor: documentStyle.getPropertyValue('--yellow-300'),
          data: [9]
        },
        {
          label: 'I/S',
          backgroundColor: documentStyle.getPropertyValue('--cyan-300'),
          borderColor: documentStyle.getPropertyValue('--cyan-300'),
          data: [19]
        },
      ]
    };


    this.options = {
      plugins: {
        legend: {
          position: 'bottom',
          boxWidth: 5,
          labels: {
            usePointStyle: true,
            boxWidth: 10,
            boxHeight: 10,
            padding: 15,
            font: {
              size: 12,
            }
          }
        },
        chartAreaBorder: {
          borderColor: 'red',
          borderWidth: 2,
          borderDash: [5, 5],
          borderDashOffset: 2,
        },

      }
    }
  }


}
