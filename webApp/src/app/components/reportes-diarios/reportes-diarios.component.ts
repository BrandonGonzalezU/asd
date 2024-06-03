import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../layouts/header/header.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { TimelineModule } from 'primeng/timeline';
import { DialogModule } from 'primeng/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-reportes-diarios',
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
    FormsModule,
    DropdownModule,
  ],
  templateUrl: './reportes-diarios.component.html',
  styleUrl: './reportes-diarios.component.css',
})
export class ReportesDiariosComponent implements OnInit {
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
  eventsCrestTarasco: {
    estadoDelTiempo: string;
    dias: string;
  }[] = [];

  actividades: {
    programadas: number;
    realizado: number;
    rezago: number;
    fueraDePrograma: number;
  }[] = [];
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

  //Almacena el texto de la data que sera utilizada
  dataDinamica: any;

  COembarcaciones: any;

  programado: number = 0;
  realizado: number = 1;
  rezago: number = 2;
  fueraDePrograma: number = 3;

  dia: any;
  centroDeProceso: any;

  //Agrupacion para el DropDown del PEM
  versionesPET: {}[] = [];

  selectedPEM: string = 'Abril';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.centroDeProceso = this.route.snapshot.paramMap.get('centrodeproceso');

    this.versionesPET = [
      {
        label: 'PET I',
        items: [
          { label: 'Enero', value: 'Enero' },
          { label: 'Febrero', value: 'Febrero' },
          { label: 'Marzo', value: 'Marzo' },
        ],
      },
      {
        label: 'PET II',
        items: [
          { label: 'Abril', value: 'Abril' },
          // { label: 'Mayo', value: 'Mayo' },
          // { label: 'Junio', value: 'Junio' },
        ],
      },
      // {
      //   label: 'PET III',
      //   items: [
      //     { label: 'Julio', value: 'Julio' },
      //     { label: 'Agosto', value: 'Agosto' },
      //     { label: 'Septiembre', value: 'Septiembre' },
      //   ],
      // },
      // {
      //   label: 'PET IV',
      //   items: [
      //     { label: 'Octubre', value: 'Octubre' },
      //     { label: 'Noviembre', value: 'Noviembre' },
      //     { label: 'Diciembre', value: 'Diciembre' },
      //   ],
      // },
    ];

    this.COembarcaciones = [
      'Artemis',
      'CrestTarasco',
      'DosBocas',
      'ToisaProteus',
      'BlueStingray',
      'BluePioneer',
    ];

    switch (this.centroDeProceso) {
      case 'Litoral-A': {
        switch (this.activeIndex) {
          case 2: {
            console.log('estas en artemis');
          }
        }
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

    this.eventsCrestTarascoCantidad = ['9', '8', '15'];

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
      {
        estadoDelTiempo: 'OP',
        dias: '19',
      },
      {
        estadoDelTiempo: 'FF',
        dias: '8',
      },
      {
        estadoDelTiempo: 'FO',
        dias: '3',
      },
    ];
  }

  selectData(e: any) {
    this.dia = e.element.index + 1;
    if (e.element.index > 9) {
      this.router.navigate([
        'centros-de-proceso/' +
        this.centroDeProceso +
        '/opciones/ReportesDiarios/' +
        this.COembarcaciones[this.activeIndex] +
        '/' + this.selectedPEM + '/' + this.dia + '/actividades'
      ]);
    } else {
      this.dia = '0' + this.dia;
      this.router.navigate([
        'centros-de-proceso/' +
        this.centroDeProceso +
        '/opciones/ReportesDiarios/' +
        this.COembarcaciones[this.activeIndex] +
        '/' + this.selectedPEM + '/' + this.dia + '/actividades'
      ]);
    }


  }

  goToTotalProgramadas() {
    console.log('Total Programadas');
    this.router.navigate([
      '/centros-de-proceso/' +
      this.centroDeProceso +
      '/opciones/PEM/' +
      this.selectedPEM +
      '/' +
      this.COembarcaciones[this.activeIndex] +
      '/programado',
    ]);
  }

  goToTotalRealizadas() {
    console.log('Total Programadas');
    this.router.navigate([
      '/centros-de-proceso/' +
      this.centroDeProceso +
      '/opciones/PEM/' +
      this.COembarcaciones[this.activeIndex] +
      '/realizado',
    ]);
  }

  goToTotalRezagos() {
    console.log('Total Programadas');
    this.router.navigate([
      '/centros-de-proceso/' +
      this.centroDeProceso +
      '/opciones/PEM/' +
      this.COembarcaciones[this.activeIndex] +
      '/rezago',
    ]);
  }

  goToTotalFueraDePrograma() {
    console.log('Total Programadas');
    this.router.navigate([
      '/centros-de-proceso/' +
      this.centroDeProceso +
      '/opciones/PEM/' +
      this.COembarcaciones[this.activeIndex] +
      '/fuera-de-programa',
    ]);
  }

  addStyle(e: any) {
    console.log(e);
  }

  ngOnInit() {
    this.mesSeleccionado();
    this.dataCentrodeProceso();

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );

    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

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

  //Revisa que centro de proceso esta en la URL y rellena la variable para poder llamar la data correspondiente.
  dataCentrodeProceso() {
    switch (this.centroDeProceso) {
      case 'Litoral-A': {
        this.dataDinamica = 'dataCrestTarasco';
        break;
      }
      case 'DosBocas': {
        this.dataDinamica = 'dataDosBocas';
        break;
      }
      case 'Abkatun-A': {
        this.dataDinamica = 'dataToisaProteus';
        break;
      }
      case 'Pol-A': {
        this.dataDinamica = 'dataBlueStingray';
        break;
      }
      case 'Abkatun-N1': {
        this.dataDinamica = 'dataBluePiooner';
        break;
      }
    }
  }

  //Trae la informacion de el mes seleccionado.
  mesSeleccionado() {
    switch (this.selectedPEM) {
      case 'Enero': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
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
                '31',
              ],

              actividades: [
                {
                  programadas: '67',
                  realizado: '28',
                  rezago: '2',
                  fueraDePrograma: '7',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  options: {
                    padding: {
                      top: 100,
                    },
                  },
                  data: [
                    1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 11,
                    13, 14, 16, 20, 26, 28, 30, 33, 34, 35, 35, 40,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
                    4, 4, 4, 5, 7, 7, 8, 8, 8, 8, 11,
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
                '31',
              ],
              actividades: [
                {
                  programadas: '42',
                  realizado: '20',
                  rezago: '5',
                  fueraDePrograma: '8',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  data: [
                    0, 0, 0, 1, 2, 3, 6, 6, 6, 8, 8, 10, 10, 12, 15, 15, 17, 20,
                    20, 21, 23, 25, 26, 26, 28, 28, 30, 32, 32, 32, 40,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7,
                    7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 12,
                  ],
                },
                {
                  label: 'Fuera de Programada',
                  fill: false,
                  borderColor: 'gray',
                  tension: 0.4,
                  data: [
                    0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 7, 7, 7, 7,
                    7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8,
                  ],
                },
              ],
            };

            break;
          }

          case 'DosBocas': {
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
              actividades: [
                {
                  programadas: '42',
                  realizado: '20',
                  rezago: '5',
                  fueraDePrograma: '8',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4,
                    4, 4, 6, 6, 6, 8, 8, 8, 8, 8, 12,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7,
                    7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 12,
                  ],
                },
                {
                  label: 'Fuera de Programada',
                  fill: false,
                  borderColor: 'gray',
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 2, 2, 2, 3, 3, 8, 8, 9,
                  ],
                },
              ],
            };
            break;
          }
          default:
            console.log('The result does not exist');
        }
        break;
      }
      case 'Febrero': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
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
                '31',
              ],

              actividades: [
                {
                  programadas: '67',
                  realizado: '28',
                  rezago: '2',
                  fueraDePrograma: '7',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  options: {
                    padding: {
                      top: 100,
                    },
                  },
                  data: [
                    1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 11,
                    13, 14, 16, 20, 26, 28, 30, 33, 34, 35, 35, 40,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
                    4, 4, 4, 5, 7, 7, 8, 8, 8, 8, 11,
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
              ],
              actividades: [
                {
                  programadas: '47',
                  realizado: '30',
                  rezago: '5',
                  fueraDePrograma: '14',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  data: [
                    0, 0, 0, 2, 2, 3, 6, 6, 6, 8, 8, 10, 10, 13, 15, 15, 17, 20,
                    20, 21, 23, 25, 26, 26, 28, 28, 30, 34, 47,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 6, 7, 9, 9, 9, 10,
                    11, 11, 11, 11, 11, 13, 13, 13, 16,
                  ],
                },
                {
                  label: 'Fuera de Programada',
                  fill: false,
                  borderColor: 'gray',
                  tension: 0.4,
                  data: [
                    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 5, 5, 7, 7, 7, 7, 7, 7,
                    7, 7, 7, 7, 9, 11, 11, 13, 14,
                  ],
                },
              ],
            };

            break;
          }

          case 'DosBocas': {
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
              ],
              actividades: [
                {
                  programadas: '42',
                  realizado: '20',
                  rezago: '5',
                  fueraDePrograma: '8',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4,
                    4, 4, 6, 6, 6, 8, 8, 8, 8, 8, 12,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7,
                    7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 12,
                  ],
                },
                {
                  label: 'Fuera de Programada',
                  fill: false,
                  borderColor: 'gray',
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 2, 2, 2, 3, 3, 8, 8, 9,
                  ],
                },
              ],
            };
            break;
          }
          default:
            console.log('The result does not exist');
        }
        break;
      }
      case 'Marzo': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
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
                '31',
              ],

              actividades: [
                {
                  programadas: '67',
                  realizado: '28',
                  rezago: '2',
                  fueraDePrograma: '7',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  options: {
                    padding: {
                      top: 100,
                    },
                  },
                  data: [
                    1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 11,
                    13, 14, 16, 20, 26, 28, 30, 33, 34, 35, 35, 40,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
                    4, 4, 4, 5, 7, 7, 8, 8, 8, 8, 11,
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
                '31',
              ],
              actividades: [
                {
                  programadas: '68',
                  realizado: '22',
                  rezago: '7',
                  fueraDePrograma: '9',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  data: [
                    1, 1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 8, 8, 9, 10, 11,
                    13, 14, 16, 20, 26, 28, 30, 33, 34, 35, 35, 40,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    0, 0, 1, 1, 2, 3, 3, 5, 5, 5, 5, 5, 6, 6, 7, 8, 8, 10, 10,
                    10, 11, 11, 11, 11, 14, 14, 14, 16, 16, 16, 21,
                  ],
                },
                {
                  label: 'Fuera de Programada',
                  fill: false,
                  borderColor: 'gray',
                  tension: 0.4,
                  data: [
                    0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                    2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 7,
                  ],
                },
              ],
            };

            break;
          }

          case 'DosBocas': {
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
              actividades: [
                {
                  programadas: '42',
                  realizado: '20',
                  rezago: '5',
                  fueraDePrograma: '8',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4,
                    4, 4, 6, 6, 6, 8, 8, 8, 8, 8, 12,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7,
                    7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 12,
                  ],
                },
                {
                  label: 'Fuera de Programada',
                  fill: false,
                  borderColor: 'gray',
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 2, 2, 2, 3, 3, 8, 8, 9,
                  ],
                },
              ],
            };
            break;
          }
          default:
            console.log('The result does not exist');
        }
        break;
      }

      case 'Abril': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
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

              actividades: [
                {
                  programadas: '40',
                  realizado: '21',
                  rezago: '7',
                  fueraDePrograma: '5',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  options: {
                    padding: {
                      top: 100,
                    },
                  },
                  data: [
                    1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 7, 7, 9, 9,
                    10, 10, 12, 12, 12, 13, 13, 13, 14, 14, 17,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
                    4, 4, 4, 5, 7, 7, 8, 8, 8, 8, 11,
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
              actividades: [
                {
                  programadas: '68',
                  realizado: '22',
                  rezago: '19',
                  fueraDePrograma: '9',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  data: [
                    39, 39, 39, 39, 39, 39, 40, 41, 41, 42, 42, 43, 43, 43, 44, 44, 44, 44, 44, 45, 45, 45, 45, 46, 46, 46, 46, 46, 47, 47
                  ],
                },
              ],
            };

            break;
          }

          case 'DosBocas': {
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
              ],
              actividades: [
                {
                  programadas: '42',
                  realizado: '20',
                  rezago: '5',
                  fueraDePrograma: '8',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4,
                    4, 4, 6, 6, 6, 8, 8, 8, 8, 8, 12,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7,
                    7, 7, 7, 7, 9, 9, 9, 9, 9, 9, 12,
                  ],
                },
                {
                  label: 'Fuera de Programada',
                  fill: false,
                  borderColor: 'gray',
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                    1, 1, 1, 2, 2, 2, 3, 3, 8, 8, 9,
                  ],
                },
              ],
            };
            break;
          }
          default:
            console.log('The result does not exist');
        }
        break;
      }

      case 'Mayo': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
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
                '31',
              ],
              actividades: [
                {
                  programadas: '40',
                  realizado: '21',
                  rezago: '7',
                  fueraDePrograma: '5',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  options: {
                    padding: {
                      top: 100,
                    },
                  },
                  data: [
                    1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 7, 7, 9, 9,
                    10, 10, 12, 12, 12, 13, 13, 13, 14, 14, 17,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4,
                    4, 4, 4, 5, 7, 7, 8, 8, 8, 8, 11,
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
                '31',
              ],
              actividades: [
                {
                  programadas: '67',
                  realizado: '14',
                  rezago: '9',
                  fueraDePrograma: '0',
                },
              ],
              datasets: [
                {
                  label: 'Programado',
                  fill: false,
                  borderColor: 'blue',
                  borderDash: [5, 5],
                  tension: 0.4,
                  data: [
                    0, 1, 1, 1, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 8, 8, 8, 8, 8, 8,
                    8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8,
                  ],
                },
                {
                  label: 'Realizado',
                  fill: false,
                  borderColor: 'green',
                  tension: 0.4,
                  data: [
                    1, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5,
                    5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6,
                  ],
                },
                {
                  label: 'Rezago',
                  fill: false,
                  borderColor: 'gray',
                  tension: 0.4,
                  data: [
                    1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9,
                    9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
                  ],
                },
              ],
            };

            break;
          }

          case 'DosBocas': {
            break;
          }
          default:
            console.log('The result does not exist');
        }
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
  }
}
