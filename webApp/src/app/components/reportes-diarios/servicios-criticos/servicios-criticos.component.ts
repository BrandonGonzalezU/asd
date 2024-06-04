import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
@Component({
  selector: 'app-servicios-criticos',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    ChartModule,
    CommonModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ProgressBarModule,
  ],
  templateUrl: './servicios-criticos.component.html',
  styleUrl: './servicios-criticos.component.css',
})
export class ServiciosCriticosComponent implements OnInit {
  centroDeProceso: any;
  servicioCritico: any;
  visibleActividad: boolean = false;
  mesSeleccionado: any;
  embarcacion: any;
  dia: any;
  mes: any;
  recurso: any;
  PEM: {
    pem: string;
    rubro: string;
    servicio: string;
    instalacion: string;
    recurso: string;
    CSU: number;
    actividad: string;
    inicio: Date;
    fin: Date;
    estatus: string;
    calificacion: string;
    avance: number;
  }[] = [];

  PEMfiltrado: {
    pem: string;
    rubro: string;
    servicio: string;
    instalacion: string;
    recurso: string;
    CSU: number;
    actividad: string;
    inicio: Date;
    fin: Date;
    estatus: string;
    calificacion: string;
    avance: number;
  }[] = [];

  dataDinamica: any;
  dataCrestTarasco: any;
  dataCrestTarascoCuadrilla: any;
  dataDosBocas: any;
  dataDosBocasCuadrilla: any;
  dataToisaProteus: any;
  dataToisaProteusCuadrilla: any;
  dataBlueStingray: any;
  dataBlueStingrayCuadrilla: any;
  dataBluePioneer: any;
  dataBluePioneerCuadrilla: any;
  options: any;
  informacionCP: {
    data: string;
  }[] = [];

  optionsDate: any;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.centroDeProceso = this.route.snapshot.paramMap.get('centrodeproceso');
    this.servicioCritico = this.route.snapshot.paramMap.get('servicio');
    this.mesSeleccionado = this.route.snapshot.paramMap.get('mes');
    this.recurso = this.route.snapshot.paramMap.get('recurso');
    this.mesElegido();

    this.optionsDate = {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    this.informacionCP = [
      { data: 'dataArtemis' },
      { data: 'dataCrestTarasco' },
      { data: 'dataDosBocas' },
      { data: 'dataToisaProteus' },
      { data: 'dataBlueStingray' },
      { data: 'dataBluePioneer' },
    ];

    this.PEM = [
      {
        pem: 'ABR',
        rubro: 'HALLAZGO DE INTEGRIDAD MECANICA',
        servicio: 'HALLAZGO DE INTEGRIDAD MECANICA',
        instalacion: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'EMBARCACIONES',
        CSU: 268232709,
        actividad: 'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007',
        inicio: new Date('2024-04-01T06:00:00.003Z'),
        fin: new Date('2024-04-30T06:00:00.003Z'),
        estatus: 'REALIZADO',
        calificacion: 'ROJO',
        avance: 100,
      },
      {
        pem: 'ABR',
        rubro: 'HALLAZGO DE INTEGRIDAD MECANICA',
        servicio: 'HALLAZGO (FUGA MITIGADA)',
        instalacion: 'ABK-D PERMANENTE',
        recurso: 'CUADRILLAS',
        CSU: 268220026,
        actividad: 'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003',
        inicio: new Date('2024-04-08T06:00:00.003Z'),
        fin: new Date('2024-04-30T06:00:00.003Z'),
        estatus: 'SIN ESTATUS',
        calificacion: 'NARANJA',
        avance: 0,
      },
      {
        pem: 'ABR',
        rubro: 'HALLAZGO DE INTEGRIDAD MECANICA',
        servicio: 'HALLAZGO DE INTEGRIDAD MECANICA',
        instalacion: 'PLATAF. DE PRODUCCION PB-LITORAL-A',
        recurso: 'EMBARCACIONES',
        CSU: 268232655,
        actividad: 'ATENCIÓN DE HALLAZGO EN UDC: BSELITA-GBP-022',
        inicio: new Date('2024-04-04T06:00:00.003Z'),
        fin: new Date('2024-04-30T06:00:00.003Z'),
        estatus: 'SIN ESTATUS',
        calificacion: 'ROJO',
        avance: 0,
      },
      {
        pem: 'FP',
        rubro: 'REQ OPERATIVO',
        servicio: '',
        instalacion: 'XANAB-C',
        recurso: 'CUADRILLAS',
        CSU: 268232443,
        actividad: 'LEVANTAMIENTOS EN CAMPO, TOMA DE METROLOGÍA',
        inicio: new Date('2024-04-12T06:00:00.003Z'),
        fin: new Date('2024-04-30T06:00:00.003Z'),
        estatus: 'SIN AVANCE',
        calificacion: 'ESTRUCTURAL',
        avance: 28,
      },
      {
        pem: 'ABR',
        rubro: 'REQ OPERATIVO',
        servicio: 'MANTENIMIENTO CORRECTIVO A LINEA',
        instalacion: 'ABK-D PERMANENTE',
        recurso: 'CUADRILLAS',
        CSU: 268240549,
        actividad:
          'SUSTITUCIÓN DE ENVOLVENTE NO METÁLICA EN UDC: ECOABKD-GCO-078',
        inicio: new Date('2024-04-13T06:00:00.003Z'),
        fin: new Date('2024-04-30T06:00:00.003Z'),
        estatus: 'EJECUCION',
        calificacion: 'SIN COLOR',
        avance: 55,
      },
      {
        pem: 'ABR',
        rubro: 'AMARRE DE POZOS',
        servicio: 'AMARRE DE POZOS',
        instalacion: 'PLATAF. DE PERFORACION XANAB-C',
        recurso: 'CUADRILLAS',
        CSU: 268241530,
        actividad: 'DESMANTELAMIENTO DE BAJANTE No. 2 DEL POZO 45 COND 12',
        inicio: new Date('2024-04-01T06:00:00.003Z'),
        fin: new Date('2024-04-05T06:00:00.003Z'),
        estatus: 'EJECUCION',
        calificacion: 'ROJO',
        avance: 57,
      },
      {
        pem: 'ABR',
        rubro: 'MANTENIMIENTO ESTRUCTURAL',
        servicio: 'MANTENIMIENTO PREVENTIVO ESTRUCTURAL',
        instalacion: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'CUADRILLAS',
        CSU: 268241475,
        actividad:
          'MANTENIMIENTO PREVENTIVO AL SISTEMA ESTRUCTURAL EN LA PALATAFORMA CA-LITORAL-A (PROTECCIÓN ANTICORROSIVA).',
        inicio: new Date('2024-04-10T06:00:00.003Z'),
        fin: new Date('2024-04-30T06:00:00.003Z'),
        estatus: 'SIN ESTATUS',
        calificacion: 'ESTRUCTURAL',
        avance: 0,
      },
      {
        pem: 'ABR',
        rubro: 'MANTENIMIENTO ESTRUCTURAL',
        servicio: 'MANTENIMIENTO PREVENTIVO ESTRUCTURAL',
        instalacion: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'CUADRILLAS',
        CSU: 268241621,
        actividad:
          'MANTENIMIENTO PREVENTIVO AL SISTEMA ESTRUCTURAL EN LA PALATAFORMA CB-LITORAL-A (PROTECCIÓN ANTICORROSIVA).',
        inicio: new Date('2024-04-01T06:00:00.003Z'),
        fin: new Date('2024-04-30T06:00:00.003Z'),
        estatus: 'REALIZADO',
        calificacion: 'VERDE',
        avance: 100,
      },
    ];
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    this.mesElegido();
    this.dataCentrodeProceso();
    this.dia = this.route.snapshot.paramMap.get('dia');
    this.mes = this.route.snapshot.paramMap.get('mes');

    switch (this.servicioCritico) {
      case 'amarre-pozos': {
        this.servicioCritico = 'AMARRE DE POZOS';
        break;
      }
      case 'hims': {
        this.servicioCritico = 'HALLAZGO DE INTEGRIDAD MECANICA';
        break;
      }
      case 'requerimiento-operativo': {
        this.servicioCritico = 'REQ OPERATIVO';
        break;
      }
      case 'anomalia': {
        this.servicioCritico = 'ANOMALIA';
        break;
      }
      case 'mantenimiento-estructural': {
        this.servicioCritico = 'MANTENIMIENTO ESTRUCTURAL';
        break;
      }
    }

    switch (this.mes) {
      case 'Enero': {
        this.mes = '01';
        break;
      }
      case 'Febrero': {
        this.mes = '02';
        break;
      }
      case 'Marzo': {
        this.mes = '03';
        break;
      }
      case 'Abril': {
        this.mes = '04';
        break;
      }
      case 'Mayo': {
        this.mes = '05';
        break;
      }
      case 'Junio': {
        this.mes = '06';
        break;
      }
    }
    this.filtrarPET();
    this.embarcacion = this.route.snapshot.paramMap.get('embarcacion');

    this.dataCrestTarasco = {
      labels: ['Rojos', 'Naranjas', 'Amarillos', 'Verdes'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Calificacion Actividad',
          data: [5, 2, 2, 0],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-400'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--green-100'),
          ],
        },
      ],
    };

    this.dataCrestTarascoCuadrilla = {
      labels: ['Rojos', 'Naranjas', 'Amarillos', 'Verdes'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Calificacion Actividad',
          data: [5, 8, 1, 0],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-400'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--green-100'),
          ],
        },
      ],
    };

    this.dataDosBocas = {
      labels: ['Rojos', 'Naranjas', 'Amarillos', 'Verdes'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Calificacion Actividad',
          data: [5, 2, 2, 0],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-400'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--green-100'),
          ],
        },
      ],
    };
    this.dataDosBocasCuadrilla = {
      labels: ['Rojos', 'Naranjas', 'Amarillos', 'Verdes'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Calificacion Actividad',
          data: [5, 8, 1, 0],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-400'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--green-100'),
          ],
        },
      ],
    };
    this.dataToisaProteus = {
      labels: ['Rojos', 'Naranjas', 'Amarillos', 'Verdes'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Calificacion Actividad',
          data: [5, 2, 2, 0],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-400'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--green-100'),
          ],
        },
      ],
    };
    this.dataToisaProteusCuadrilla = {
      labels: ['Rojos', 'Naranjas', 'Amarillos', 'Verdes'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Calificacion Actividad',
          data: [5, 8, 1, 0],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-400'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--green-100'),
          ],
        },
      ],
    };
    this.dataBlueStingray = {
      labels: ['Rojos', 'Naranjas', 'Amarillos', 'Verdes'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Calificacion Actividad',
          data: [5, 2, 2, 0],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-400'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--green-100'),
          ],
        },
      ],
    };
    this.dataBlueStingrayCuadrilla = {
      labels: ['Rojos', 'Naranjas', 'Amarillos', 'Verdes'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Calificacion Actividad',
          data: [5, 8, 1, 0],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-400'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--green-100'),
          ],
        },
      ],
    };
    this.dataBluePioneer = {
      labels: ['Rojos', 'Naranjas', 'Amarillos', 'Verdes'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Calificacion Actividad',
          data: [5, 2, 2, 0],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-400'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--green-100'),
          ],
        },
      ],
    };
    this.dataBluePioneerCuadrilla = {
      labels: ['Rojos', 'Naranjas', 'Amarillos', 'Verdes'],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Calificacion Actividad',
          data: [5, 8, 1, 0],
          backgroundColor: [
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-400'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--red-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--green-100'),
          ],
        },
      ],
    };

    this.options = {
      maintainAspectRatio: true,
      responsive: true,
      plugins: {
        datalabels: {
          anchor: 'end',
          align: 'top',
          formatter: Math.round,
          font: {
            weight: 'bold',
          },
        },
      },
    };
  }

  filtrarPET() {
    for (let i = 0; i < this.PEM.length; i++) {
      if (
        this.PEM[i].inicio >
          new Date('2024-' + this.mes + '-01T06:00:00.000Z') &&
        this.PEM[i].inicio <
          new Date('2024-' + this.mes + '-' + this.dia + 'T23:00:00.000Z') &&
        this.PEM[i].recurso === this.recurso.toUpperCase() &&
        this.PEM[i].rubro === this.servicioCritico
      ) {
        this.PEMfiltrado.push(this.PEM[i]);
      }
    }
  }

  showActividad() {
    this.visibleActividad = true;
    console.log(this.visibleActividad);
  }

  formatDate(value: Date) {
    return value.toLocaleDateString('mx-es', this.optionsDate);
  }

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
        this.dataDinamica = 'dataBluePioneer';
        break;
      }
    }
  }

  mesElegido() {
    switch (this.mesSeleccionado) {
      case 'Enero': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'DosBocas': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Abkatun-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Pol-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Abkatun-N1': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
        }
        break;
      }
      case 'Febrero': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'DosBocas': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Abkatun-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Pol-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Abkatun-N1': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
        }
        break;
      }
      case 'Marzo': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'DosBocas': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Abkatun-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Pol-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Abkatun-N1': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
        }
        break;
      }
      case 'Abril': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'DosBocas': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Abkatun-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Pol-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Abkatun-N1': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
        }
        break;
      }
      case 'Mayo': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'DosBocas': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Abkatun-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Pol-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
          case 'Abkatun-N1': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.mesSeleccionado
            );
            break;
          }
        }
        break;
      }

      default:
        console.log('Reporte Diario no existe');
    }
  }

  selectData(e: any) {
    console.log(e);

    if (e.element.index === 0) {
      console.log('Pozos');
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/amarre-pozos',
      ]);
    }
    if (e.element.index === 1) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/apoyo-operacion',
      ]);
    }
    if (e.element.index === 2) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/apoyo-mantenimiento-dinamico',
      ]);
    }
    if (e.element.index === 3) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/hallazgos',
      ]);
    }
    if (e.element.index === 4) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/hims',
      ]);
    }
    if (e.element.index === 5) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/levantamientos',
      ]);
    }
    if (e.element.index === 6) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/mantenimiento-correctivo-linea',
      ]);
    }
    if (e.element.index === 7) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/mantenimiento-preventivo-linea',
      ]);
    }
    if (e.element.index === 8) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/mantenimiento-preventivo-recipiente',
      ]);
    }
    if (e.element.index === 9) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/mantenimiento-preventivo-estructural',
      ]);
    }
    if (e.element.index === 10) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/servicio-critico/' +
          this.mesSeleccionado +
          '/prefabricados',
      ]);
    }
  }
}
