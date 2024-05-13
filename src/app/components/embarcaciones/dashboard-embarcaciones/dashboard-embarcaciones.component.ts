import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { TabViewModule } from 'primeng/tabview';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { plugins } from 'chart.js';

@Component({
  selector: 'app-dashboard-embarcaciones',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, TabViewModule, CommonModule, ButtonModule, ChartModule],
  templateUrl: './dashboard-embarcaciones.component.html',
  styleUrl: './dashboard-embarcaciones.component.css'
})
export class DashboardEmbarcacionesComponent implements OnInit {
  activeIndex: number = 0;
  embarcaciones: {
    gerencia: string, nombre: string, contenido: string, programadas: string, realizado: string, rezago: string,
    fueraDePrograma: string
  }[] = [];
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

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.embarcaciones = [
      { gerencia: 'Litoral-A', nombre: 'Artemis', contenido: 'dataArtemis', programadas: '40', realizado: '21', rezago: '7', fueraDePrograma: '5' },
      { gerencia: 'Litoral-A', nombre: 'Crest Tarasco', contenido: 'dataCrestTarasco', programadas: '40', realizado: '21', rezago: '7', fueraDePrograma: '0' },
      { gerencia: 'Terminal Marítima Dos Bocas', nombre: 'Dos Bocas', contenido: 'dataDosBocas', programadas: '12', realizado: '12', rezago: '0', fueraDePrograma: '0' },
      { gerencia: 'Abkatun-A', nombre: 'Toisa Proteus', contenido: 'dataToisaProteus', programadas: '28', realizado: '17', rezago: '3', fueraDePrograma: '9' },
      { gerencia: 'Pol-A', nombre: 'Blue Stingray', contenido: 'dataBlueStingray', programadas: '8', realizado: '4', rezago: '5', fueraDePrograma: '0' },
      { gerencia: 'Abkatun-N1', nombre: 'Blue Pioneer', contenido: 'dataBluePiooner', programadas: '17', realizado: '11', rezago: '0', fueraDePrograma: '0' },
    ];

    this.dataArtemis = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
        '25', '26', '27', '28', '29', '30', '31'
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 7, 7, 9, 9, 10, 10, 12, 12, 12, 13, 13, 13, 14, 14, 17],

        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 7, 7, 8, 8, 8, 8, 11]
        }
      ]
    };

    this.dataArtemisStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],
      plugins: {
        legend: {
          position: 'left',
        }
      },
      datasets: [
        {
          data: [15, 8, 9],
          backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--gray-500'), documentStyle.getPropertyValue('--red-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--gray-400'), documentStyle.getPropertyValue('--red-400')]
        }
      ]
    };


    this.dataCrestTarasco = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
        '25', '26', '27', '28', '29', '30', '31'
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [1, 1, 1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9, 11, 11, 13, 14, 16, 20, 26, 28, 30, 33, 35, 35, 35, 40],

        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [0, 0, 1, 1, 2, 3, 3, 4, 5, 5, 5, 5, 5, 6, 6, 8, 8, 10, 10, 10, 10, 11, 11, 11, 16, 16, 16, 18, 18, 18, 21]
        },
        {
          label: 'Rezago',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--gray-500'),
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 7]
        }
      ]
    };

    this.dataCrestTarascoStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],
      datasets: [
        {
          data: [15, 8, 9],
          backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--gray-500'), documentStyle.getPropertyValue('--red-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--gray-400'), documentStyle.getPropertyValue('--red-400')]
        }
      ]
    };

    this.dataDosBocas = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
        '25', '26', '27', '28', '29', '30', '31'
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4, 6, 6, 6, 8, 8, 8, 8, 8, 12],

        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 6, 7, 7, 9, 9, 12]
        }
      ]
    };

    this.dataDosBocasStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],
      datasets: [
        {
          data: [21, 2, 8],
          backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--gray-500'), documentStyle.getPropertyValue('--red-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--gray-400'), documentStyle.getPropertyValue('--red-400')]
        }
      ]
    };

    this.dataToisaProteus = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
        '25', '26', '27', '28', '29', '30', '31'
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 7, 7, 7, 8, 8, 11, 11, 11, 11, 11, 11, 17],

        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 6, 6, 6, 7, 17]
        },
        {
          label: 'Rezago',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--gray-500'),
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3]
        },
        {
          label: 'Fuera de Programa',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 8, 8, 9]
        }
      ]
    };

    this.dataToisaProteusStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],
      datasets: [
        {
          data: [13, 14, 4],
          backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--gray-500'), documentStyle.getPropertyValue('--red-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--gray-400'), documentStyle.getPropertyValue('--red-400')]
        }
      ]
    };

    this.dataBlueStingray = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
        '25', '26', '27', '28', '29', '30', '31'
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 7, 7, 9, 9, 10, 10, 12, 12, 12, 13, 13, 13, 14, 14, 17],

        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 4]
        },
        {
          label: 'Rezago',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--gray-500'),
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]
        }
      ]
    };

    this.dataBlueStingrayStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],
      datasets: [
        {
          data: [19, 5, 7],
          backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--gray-500'), documentStyle.getPropertyValue('--red-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--gray-400'), documentStyle.getPropertyValue('--red-400')]
        }
      ]
    };


    this.dataBluePiooner = {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',
        '25', '26', '27', '28', '29', '30', '31'
      ],
      datasets: [
        {
          label: 'Programado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          borderDash: [5, 5],
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 7, 7, 9, 9, 10, 10, 12, 12, 12, 13, 13, 13, 14, 14, 17],

        },
        {
          label: 'Realizado',
          fill: false,
          borderColor: documentStyle.getPropertyValue('--green-500'),
          tension: 0.4,
          data: [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 7, 7, 8, 8, 8, 8, 11]
        }
      ]
    };

    this.dataBluePioonerStatus = {
      labels: ['En operación', 'Frente frío', 'Fuera de operación'],

      datasets: [
        {
          data: [12, 7, 12],
          backgroundColor: [documentStyle.getPropertyValue('--green-500'), documentStyle.getPropertyValue('--gray-500'), documentStyle.getPropertyValue('--red-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--green-400'), documentStyle.getPropertyValue('--gray-400'), documentStyle.getPropertyValue('--red-400')]
        }
      ]
    };

  }
}
