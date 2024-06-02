import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    DropdownModule,
    FormsModule,
    ChartModule,
    CommonModule,
  ],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css',
})
export class ActividadesComponent implements OnInit {
  centroDeProceso: any;
  versionesPET: {}[] = [];
  selectedPEM: string = 'Abril';
  dataDinamica: any;
  informacionCP: {
    data: string;
  }[] = [];
  actividades: {
    inst: string;
    inicioProg: string;
    finProg: string;
    avance: string;
    criticidad: string;
    rezago: string;
    fueraDePrograma: string;
  }[] = [];
  data: any;
  dataCrestTarasco: any;
  dataDosBocas: any;
  dataToisaProteus: any;
  dataBlueStingray: any;
  dataBluePiooner: any;
  options: any;

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
    ];

    this.informacionCP = [
      { data: 'dataArtemis' },
      { data: 'dataCrestTarasco' },
      { data: 'dataDosBocas' },
      { data: 'dataToisaProteus' },
      { data: 'dataBlueStingray' },
      { data: 'dataBluePiooner' },
    ];
  }

  ngOnInit() {
    this.mesSeleccionado();
    this.dataCentrodeProceso();
    console.log(this.informacionCP[0]);
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    this.dataCrestTarasco = {
      labels: [
        'Amarre de pozos',
        'Ap. a la operacion',
        'Ap. al m. dinamico',
        'Hallazgo',
        "HIM's",
        'Levantamientos',
        'M. c. linea',
        'M. p. linea',
        'M. p. recipiente',
        'M. p. estructural',
        'Prefabricados',
      ],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Menu',
          data: [3, 6, 1, 1, 23, 2, 3, 16, 4, 2, 2],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--red-200'),
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--blue-200'),
            documentStyle.getPropertyValue('--purple-400'),
            documentStyle.getPropertyValue('--pink-600'),
            documentStyle.getPropertyValue('--gray-300'),
            documentStyle.getPropertyValue('--blue-600'),
            documentStyle.getPropertyValue('--yellow-800'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--red-100'),
            documentStyle.getPropertyValue('--red-500'),
            documentStyle.getPropertyValue('--blue-100'),
            documentStyle.getPropertyValue('--purple-300'),
            documentStyle.getPropertyValue('--pink-500'),
            documentStyle.getPropertyValue('--gray-200'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-700'),
          ],
        },
      ],
    };

    this.dataDosBocas = {
      labels: [
        'Amarre de pozos',
        'Ap. a la operacion',
        'Ap. al m. dinamico',
        'Hallazgo',
        "HIM's",
        'Levantamientos',
        'M. c. linea',
        'M. p. linea',
        'M. p. recipiente',
        'M. p. estructural',
        'Prefabricados',
      ],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Menu',
          data: [3, 6, 1, 1, 23, 2, 3, 16, 4, 2, 2],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--red-200'),
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--blue-200'),
            documentStyle.getPropertyValue('--purple-400'),
            documentStyle.getPropertyValue('--pink-600'),
            documentStyle.getPropertyValue('--gray-300'),
            documentStyle.getPropertyValue('--blue-600'),
            documentStyle.getPropertyValue('--yellow-800'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--red-100'),
            documentStyle.getPropertyValue('--red-500'),
            documentStyle.getPropertyValue('--blue-100'),
            documentStyle.getPropertyValue('--purple-300'),
            documentStyle.getPropertyValue('--pink-500'),
            documentStyle.getPropertyValue('--gray-200'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-700'),
          ],
        },
      ],
    };
    this.dataToisaProteus = {
      labels: [
        'Amarre de pozos',
        'Ap. a la operacion',
        'Ap. al m. dinamico',
        'Hallazgo',
        "HIM's",
        'Levantamientos',
        'M. c. linea',
        'M. p. linea',
        'M. p. recipiente',
        'M. p. estructural',
        'Prefabricados',
      ],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Menu',
          data: [3, 6, 1, 1, 23, 2, 3, 16, 4, 2, 2],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--red-200'),
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--blue-200'),
            documentStyle.getPropertyValue('--purple-400'),
            documentStyle.getPropertyValue('--pink-600'),
            documentStyle.getPropertyValue('--gray-300'),
            documentStyle.getPropertyValue('--blue-600'),
            documentStyle.getPropertyValue('--yellow-800'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--red-100'),
            documentStyle.getPropertyValue('--red-500'),
            documentStyle.getPropertyValue('--blue-100'),
            documentStyle.getPropertyValue('--purple-300'),
            documentStyle.getPropertyValue('--pink-500'),
            documentStyle.getPropertyValue('--gray-200'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-700'),
          ],
        },
      ],
    };
    this.dataBlueStingray = {
      labels: [
        'Amarre de pozos',
        'Ap. a la operacion',
        'Ap. al m. dinamico',
        'Hallazgo',
        "HIM's",
        'Levantamientos',
        'M. c. linea',
        'M. p. linea',
        'M. p. recipiente',
        'M. p. estructural',
        'Prefabricados',
      ],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Menu',
          data: [3, 6, 1, 1, 23, 2, 3, 16, 4, 2, 2],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--red-200'),
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--blue-200'),
            documentStyle.getPropertyValue('--purple-400'),
            documentStyle.getPropertyValue('--pink-600'),
            documentStyle.getPropertyValue('--gray-300'),
            documentStyle.getPropertyValue('--blue-600'),
            documentStyle.getPropertyValue('--yellow-800'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--red-100'),
            documentStyle.getPropertyValue('--red-500'),
            documentStyle.getPropertyValue('--blue-100'),
            documentStyle.getPropertyValue('--purple-300'),
            documentStyle.getPropertyValue('--pink-500'),
            documentStyle.getPropertyValue('--gray-200'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-700'),
          ],
        },
      ],
    };
    this.dataBluePiooner = {
      labels: [
        'Amarre de pozos',
        'Ap. a la operacion',
        'Ap. al m. dinamico',
        'Hallazgo',
        "HIM's",
        'Levantamientos',
        'M. c. linea',
        'M. p. linea',
        'M. p. recipiente',
        'M. p. estructural',
        'Prefabricados',
      ],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Menu',
          data: [3, 6, 1, 1, 23, 2, 3, 16, 4, 2, 2],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--orange-400'),
            documentStyle.getPropertyValue('--red-200'),
            documentStyle.getPropertyValue('--red-600'),
            documentStyle.getPropertyValue('--blue-200'),
            documentStyle.getPropertyValue('--purple-400'),
            documentStyle.getPropertyValue('--pink-600'),
            documentStyle.getPropertyValue('--gray-300'),
            documentStyle.getPropertyValue('--blue-600'),
            documentStyle.getPropertyValue('--yellow-800'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--green-300'),
            documentStyle.getPropertyValue('--yellow-300'),
            documentStyle.getPropertyValue('--orange-300'),
            documentStyle.getPropertyValue('--red-100'),
            documentStyle.getPropertyValue('--red-500'),
            documentStyle.getPropertyValue('--blue-100'),
            documentStyle.getPropertyValue('--purple-300'),
            documentStyle.getPropertyValue('--pink-500'),
            documentStyle.getPropertyValue('--gray-200'),
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-700'),
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

  selectData(e: any) {
    console.log(e);

    if (e.element.index === 0) {
      console.log('Pozos');
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/amarre-pozos',
      ]);
    }
    if (e.element.index === 1) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/apoyo-operacion',
      ]);
    }
    if (e.element.index === 2) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/apoyo-mantenimiento-dinamico',
      ]);
    }
    if (e.element.index === 3) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/hallazgos',
      ]);
    }
    if (e.element.index === 4) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/hims',
      ]);
    }
    if (e.element.index === 5) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/levantamientos',
      ]);
    }
    if (e.element.index === 6) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/mantenimiento-correctivo-linea',
      ]);
    }
    if (e.element.index === 7) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/mantenimiento-preventivo-linea',
      ]);
    }
    if (e.element.index === 8) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/mantenimiento-preventivo-recipiente',
      ]);
    }
    if (e.element.index === 9) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/mantenimiento-preventivo-estructural',
      ]);
    }
    if (e.element.index === 10) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.selectedPEM +
          '/actividades/prefabricados',
      ]);
    }
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
        this.dataDinamica = 'dataBluePiooner';
        break;
      }
    }
  }

  mesSeleccionado() {
    switch (this.selectedPEM) {
      case 'Enero': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'DosBocas': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Abkatun-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Pol-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Abkatun-N1': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
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
                this.selectedPEM
            );
            break;
          }
          case 'DosBocas': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Abkatun-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Pol-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Abkatun-N1': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
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
                this.selectedPEM
            );
            break;
          }
          case 'DosBocas': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Abkatun-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Pol-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Abkatun-N1': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
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
                this.selectedPEM
            );
            break;
          }
          case 'DosBocas': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Abkatun-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Pol-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Abkatun-N1': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
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
                this.selectedPEM
            );
            break;
          }
          case 'DosBocas': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Abkatun-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Pol-A': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
            );
            break;
          }
          case 'Abkatun-N1': {
            console.log(
              'Reporte diario de ' +
                this.centroDeProceso +
                ' en el mes de ' +
                this.selectedPEM
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
}
