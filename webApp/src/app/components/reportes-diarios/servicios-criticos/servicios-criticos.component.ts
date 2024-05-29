import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-servicios-criticos',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, ChartModule, CommonModule],
  templateUrl: './servicios-criticos.component.html',
  styleUrl: './servicios-criticos.component.css',
})
export class ServiciosCriticosComponent implements OnInit {
  centroDeProceso: any;
  servicioCritico: any;
  mesSeleccionado: any;
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

  constructor(private router: Router, private route: ActivatedRoute) {
    this.centroDeProceso = this.route.snapshot.paramMap.get('centrodeproceso');
    this.servicioCritico = this.route.snapshot.paramMap.get('servicio');
    this.mesSeleccionado = this.route.snapshot.paramMap.get('mes');
    this.mesElegido();

    this.informacionCP = [
      { data: 'dataArtemis' },
      { data: 'dataCrestTarasco' },
      { data: 'dataDosBocas' },
      { data: 'dataToisaProteus' },
      { data: 'dataBlueStingray' },
      { data: 'dataBluePioneer' },
    ];
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    this.mesElegido();
    this.dataCentrodeProceso();
    console.log(this.dataDinamica);

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
