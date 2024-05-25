import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { plugins } from 'chart.js';
import { TimelineModule } from 'primeng/timeline';
import { DialogModule } from 'primeng/dialog';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-embarcaciones',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    TabViewModule,
    CommonModule,
    ButtonModule,
    ChartModule,
    TimelineModule,
    DialogModule,
  ],
  templateUrl: './dashboard-embarcaciones.component.html',
  styleUrl: './dashboard-embarcaciones.component.css',
})
export class DashboardEmbarcacionesComponent implements OnInit {
  activeIndex: number = 0;
  visible: boolean = false;
  embarcaciones: {
    gerencia: string;
    nombre: string;
    contenido: string;
    programadas: string;
    realizado: string;
    rezago: string;
    fueraDePrograma: string;
  }[] = [];
  //Timeline climatologico
  eventsArtemis: string[];
  eventsCrestTarasco: string[];
  eventsCrestTarascoCantidad: string[];
  //Datas de cada embarcacion
  dataArtemis: any;
  dataArtemisStatus: any;
  dataCrestTarasco: any;
  dataCrestTarascoStatus: any;
  dataDosBocas: any;
  dataDosBocasStatus: any;
  dataToisaProteus: any;
  dataToisaProteusStatus: any;
  dataBlueStingray: any;
  dataBlueStingrayStatus: any;
  dataBluePiooner: any;
  dataBluePioonerStatus: any;
  options: any;

  COembarcaciones: any;

  programado: number = 0;
  realizado: number = 1;
  rezago: number = 2;
  fueraDePrograma: number = 3;

  dia: any;
  centroDeProceso: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.centroDeProceso = this.route.snapshot.paramMap.get('centrodeproceso');

    this.COembarcaciones = [
      'Artemis',
      'CrestTarasco',
      'DosBocas',
      'ToisaProteus',
      'BlueStingray',
      'BluePioneer'
    ]

    switch (this.centroDeProceso) {
      case 'Litoral-A': {
        this.activeIndex = 1;
        break;
      }
      case 'DosBocas': {
        this.activeIndex = 2;
        break;
      }
      case 'Abkatun-A': {
        this.activeIndex = 3;
        break;
      }
      case 'Pol-A': {
        this.activeIndex = 4;
        break;
      }
      case 'Abkatun-N1': {
        this.activeIndex = 5;
        break;
      }

      default:
        console.log('The result does not exist');
    }

    this.eventsCrestTarascoCantidad = [
      '9',
      '8',
      '15'
    ]

    this.eventsArtemis = [
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'FF',
      'FF',
      'FF',
      'OP',
      'OP',
      'FF',
      'FF',
      'OP',
      'FF',
      'FF',
      'FF',
      'FF',
      'FF',
      'FF',
      'FF',
      'FO',
      'FO',
      'FO',
      'FO',
      'FO',
      'FO',
      'FO',
      'FO',
      'FO',
    ];
    this.eventsCrestTarasco = [
      'FO',
      'FO',
      'FO',
      'FO',
      'FO',
      'FO',
      'FO',
      'FO',
      'FO',
      'OP',
      'OP',
      'FF',
      'FF',
      'FF',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
      'OP',
    ];
  }

  selectData(e: any) {
    this.dia = e.element.index + 1;
    if (e.element.datasetIndex === this.programado) {
      this.router.navigate([
        'centros-de-proceso/' + this.centroDeProceso + '/dashboard/' + this.COembarcaciones[this.activeIndex] + '/programado/',
        this.dia,
      ]);
    } else if (e.element.datasetIndex === this.realizado) {
      this.router.navigate([
        'centros-de-proceso/' + this.centroDeProceso + '/dashboard/' + this.COembarcaciones[this.activeIndex] + '/realizado/',
        this.dia,
      ]);
    } else if (e.element.datasetIndex === this.rezago) {
      this.router.navigate(['centros-de-proceso/' + this.centroDeProceso + '/dashboard/' + this.COembarcaciones[this.activeIndex] + '/rezago/',
      this.dia,]);

    } else if (e.element.datasetIndex === this.fueraDePrograma) {
      this.router.navigate([
        'centros-de-proceso/' + this.centroDeProceso + '/dashboard/' + this.COembarcaciones[this.activeIndex] + '/fuera-de-programa/',
        this.dia,
      ]);
    } else {
      console.log('Error');
    }
    // console.log(e)
    // console.log(e.element);
    // console.log(e.element.datasetIndex);
    // console.log(e.element.index);
  }

  goToTotalProgramadas() {
    console.log('Total Programadas');
    this.router.navigate(['/centros-de-proceso/' + this.centroDeProceso + '/dashboard/' + this.COembarcaciones[this.activeIndex] + '/programado']);
  }

  goToTotalRealizadas() {
    console.log('Total Programadas');
    this.router.navigate(['/centros-de-proceso/' + this.centroDeProceso + '/dashboard/' + this.COembarcaciones[this.activeIndex] + '/realizado']);
  }

  goToTotalRezagos() {
    console.log('Total Programadas');
    this.router.navigate(['/centros-de-proceso/' + this.centroDeProceso + '/dashboard/' + this.COembarcaciones[this.activeIndex] + '/rezago']);
  }

  goToTotalFueraDePrograma() {
    console.log('Total Programadas');
    this.router.navigate(['/centros-de-proceso/' + this.centroDeProceso + '/dashboard/' + this.COembarcaciones[this.activeIndex] + '/fuera-de-programa']);
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    console.log(document.getElementById(this.centroDeProceso))
    this.embarcaciones = [
      {
        gerencia: 'Litoral-A',
        nombre: 'Artemis',
        contenido: 'dataArtemis',
        programadas: '40',
        realizado: '21',
        rezago: '7',
        fueraDePrograma: '5',
      },
      {
        gerencia: 'Litoral-A',
        nombre: 'Crest Tarasco',
        contenido: 'dataCrestTarasco',
        programadas: '67',
        realizado: '14',
        rezago: '9',
        fueraDePrograma: '0',
      },
      {
        gerencia: 'Terminal Marítima Dos Bocas',
        nombre: 'Dos Bocas',
        contenido: 'dataDosBocas',
        programadas: '12',
        realizado: '12',
        rezago: '0',
        fueraDePrograma: '0',
      },
      {
        gerencia: 'Abkatun-A',
        nombre: 'Toisa Proteus',
        contenido: 'dataToisaProteus',
        programadas: '28',
        realizado: '17',
        rezago: '3',
        fueraDePrograma: '9',
      },
      {
        gerencia: 'Pol-A',
        nombre: 'Blue Stingray',
        contenido: 'dataBlueStingray',
        programadas: '8',
        realizado: '4',
        rezago: '5',
        fueraDePrograma: '0',
      },
      {
        gerencia: 'Abkatun-N1',
        nombre: 'Blue Pioneer',
        contenido: 'dataBluePiooner',
        programadas: '17',
        realizado: '11',
        rezago: '0',
        fueraDePrograma: '0',
      },
    ];

    this.dataArtemis = {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],

      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          options: {
            padding: {
              top: 100,
            },
          },
          data: [
            1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 7, 7, 9, 9, 10, 10,
            12, 12, 12, 13, 13, 13, 14, 14, 17,
          ],
        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [
            1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4,
            5, 7, 7, 8, 8, 8, 8, 11,
          ],
        },
      ],
    };

    this.dataArtemisStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],
      plugins: {
        legend: {
          position: 'left',
        },
      },
      datasets: [
        {
          data: [15, 3, 12],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--gray-500'),
            documentStyle.getPropertyValue('--red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--gray-400'),
            documentStyle.getPropertyValue('--red-400'),
          ],
        },
      ],
    };

    this.dataCrestTarasco = {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [
            0, 1, 1, 1, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 8, 8, 8, 8, 8, 8, 8,
            8, 8, 8, 8, 8, 8, 8, 8, 8, 8
          ],
        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [
            1, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5,
            5, 5, 6, 6, 6, 6, 6, 6, 6, 6,
          ],
        },
        {
          label: 'Rezago',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--gray-500'),
          tension: 0.4,
          data: [
            1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9,
            9, 9, 9, 9, 9, 9, 9, 9,
          ],
        },
      ],
    };



    this.dataCrestTarascoStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],
      datasets: [
        {
          data: [19, 3, 8],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--gray-500'),
            documentStyle.getPropertyValue('--red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--gray-400'),
            documentStyle.getPropertyValue('--red-400'),
          ],
        },
      ],
    };
    this.dataDosBocas = {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 6,
            6, 6, 8, 8, 8, 8, 8, 12,
          ],
        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [
            1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5,
            5, 5, 6, 7, 7, 9, 9, 12,
          ],
        },
      ],
    };

    this.dataDosBocasStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],
      datasets: [
        {
          data: [21, 2, 8],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--gray-500'),
            documentStyle.getPropertyValue('--red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--gray-400'),
            documentStyle.getPropertyValue('--red-400'),
          ],
        },
      ],
    };

    this.dataToisaProteus = {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [
            1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 7, 7, 7, 8,
            8, 11, 11, 11, 11, 11, 11, 17,
          ],
        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [
            1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
            4, 6, 6, 6, 6, 6, 7, 17,
          ],
        },
        {
          label: 'Rezago',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--gray-500'),
          tension: 0.4,
          data: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            1, 1, 2, 2, 2, 2, 2, 3,
          ],
        },
        {
          label: 'Fuera de Programa',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
          data: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 3, 3, 8, 8, 9,
          ],
        },
      ],
    };

    this.dataToisaProteusStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],
      datasets: [
        {
          data: [13, 14, 4],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--gray-500'),
            documentStyle.getPropertyValue('--red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--gray-400'),
            documentStyle.getPropertyValue('--red-400'),
          ],
        },
      ],
    };

    this.dataBlueStingray = {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [
            1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 7, 7, 9, 9, 10, 10,
            12, 12, 12, 13, 13, 13, 14, 14, 17,
          ],
        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            2, 2, 2, 2, 2, 2, 2, 4,
          ],
        },
        {
          label: 'Rezago',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--gray-500'),
          tension: 0.4,
          data: [
            1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4,
            4, 4, 4, 5, 5, 5, 5, 5,
          ],
        },
      ],
    };

    this.dataBlueStingrayStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],
      datasets: [
        {
          data: [19, 5, 7],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--gray-500'),
            documentStyle.getPropertyValue('--red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--gray-400'),
            documentStyle.getPropertyValue('--red-400'),
          ],
        },
      ],
    };

    this.dataBluePiooner = {
      labels: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [
            1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 7, 7, 9, 9, 10, 10,
            12, 12, 12, 13, 13, 13, 14, 14, 17,
          ],
        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [
            1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4,
            5, 7, 7, 8, 8, 8, 8, 11,
          ],
        },
      ],
    };

    this.dataBluePioonerStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],

      datasets: [
        {
          data: [12, 7, 12],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--gray-500'),
            documentStyle.getPropertyValue('--red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--gray-400'),
            documentStyle.getPropertyValue('--red-400'),
          ],
        },
      ],
    };
  }
}
