import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Fecha {
  anio: string;
  mes: string;
}

@Component({
  selector: 'app-resumen-anomalias',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    DropdownModule,
    ChartModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './resumen-anomalias.component.html',
  styleUrl: './resumen-anomalias.component.css',
})
export class ResumenAnomaliasComponent implements OnInit {
  formGroup!: FormGroup;
  fechas: Fecha[] | undefined;
  events: any[];
  graficaMensual: any;
  options: any;
  data: any;
  optionsDona: any;
  tipoRiesgo: any;

  constructor(private router: Router) {
    this.events = [
      { status: 'Canceladas', date: '127', icon: 'pi pi-times', color: '#990000', image: 'game-controller.jpg' },
      { status: 'Proceso', date: '721 / (352 con Techo Inercial)', icon: 'pi pi-cog', color: '#673AB7' },
      { status: 'Programa', date: '12866', icon: 'pi pi-list-check', color: '#8faf6b' },
      { status: 'Sin recurso', date: '10057', icon: 'pi pi-trash', color: '#FF9800' },
      { status: 'Suspendida', date: '261', icon: 'pi pi-times ', color: '#1e0000' },
      { status: 'Terminada', date: '3644 / (1284 con Deuda)', icon: 'pi pi-check', color: '#a1b65e' },

    ];
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.data = {
      labels: ['Atendidas', 'Pendientes'],
      datasets: [
        {
          data: [39, 58],
          backgroundColor: [documentStyle.getPropertyValue('--red-800'), documentStyle.getPropertyValue('--yellow-100'), documentStyle.getPropertyValue('--green-500')],
          hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
        }
      ],
    };

    this.graficaMensual = {
      // labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      labels: ['2da partes', '3ra partes', 'CMSH'],
      datasets: [
        {
          label: 'En proceso',
          backgroundColor: documentStyle.getPropertyValue('--yellow-800'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [4, 0, 5]
        },
        {
          label: 'Vencidas',
          backgroundColor: documentStyle.getPropertyValue('--red-800'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [0, 2, 21]
        },
        {
          label: 'En programa',
          backgroundColor: documentStyle.getPropertyValue('--yellow-100'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [20, 0, 5]
        },

      ]
    };


    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }

      }
    };

    this.fechas = [
      { anio: 'Abril', mes: 'NY' },
      { anio: 'Mayo', mes: 'RM' },
    ];

    this.formGroup = new FormGroup({
      selectedCity: new FormControl<Fecha | null>(null)
    });

    if (this.formGroup.value.selectedCity == 'Abril') {
      console.log('awa');
    }
    
    this.tipoRiesgo = {
      labels: ['2da partes', '3ra partes', 'CMSH'],
      datasets: [
        {
          label: 'A',
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          borderColor: documentStyle.getPropertyValue('--blue-500'),
          data: [6, 0, 1]
        },
        {
          label: 'B',
          backgroundColor: documentStyle.getPropertyValue('--orange-500'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [13, 0, 16]
        },
        {
          label: 'C',
          backgroundColor: documentStyle.getPropertyValue('--yellow-500'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [5, 0, 9]
        },
        {
          label: 'D',
          backgroundColor: documentStyle.getPropertyValue('--green-500'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [0, 0, 0]
        },
        {
          label: 'O',
          backgroundColor: documentStyle.getPropertyValue('--blue-500'),
          borderColor: documentStyle.getPropertyValue('--pink-500'),
          data: [0, 2, 0]
        },

      ]
    };
  }


  
  
}
