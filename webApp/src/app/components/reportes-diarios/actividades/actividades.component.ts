import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import { CommonModule } from '@angular/common';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
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
    TabViewModule,
    ButtonModule,
  ],
  templateUrl: './actividades.component.html',
  styleUrl: './actividades.component.css',
})
export class ActividadesComponent implements OnInit {
  activeIndex: number = 0;
  centroDeProceso: any;
  recurso: string = 'embarcaciones';
  embarcacion: any;
  dia: any;
  mes: any;
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
    avance: {};
  }[] = [];
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
  dataCrestTarascoCuadrillas: any;
  dataDosBocas: any;
  dataToisaProteus: any;
  dataBlueStingray: any;
  dataBluePiooner: any;
  options: any;

  //Contadores de cada actividad en embarcacion
  rubroAmarreDePozosCantidadE: number = 0;
  rubroAnomaliaCantidadE: number = 0;
  rubroHimsCantidadE: number = 0;
  rubroMantenimientoEstructuralCantidadE: number = 0;
  rubroRequerimientoOperativoCantidadE: number = 0;

  //Contadores de cada actividad en embarcacion
  rubroAmarreDePozosCantidadC: number = 0;
  rubroAnomaliaCantidadC: number = 0;
  rubroHimsCantidadC: number = 0;
  rubroMantenimientoEstructuralCantidadC: number = 0;
  rubroRequerimientoOperativoCantidadC: number = 0;

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
        avance: {},
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
        avance: {},
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
        avance: {},
      },
      {
        pem: 'FP',
        rubro: 'REQUERIMIENTO OPERATIVO',
        servicio: '',
        instalacion: 'XANAB-C',
        recurso: 'CUADRILLAS',
        CSU: 268232443,
        actividad: 'LEVANTAMIENTOS EN CAMPO, TOMA DE METROLOGÍA',
        inicio: new Date('2024-04-12T06:00:00.003Z'),
        fin: new Date('2024-04-30T06:00:00.003Z'),
        estatus: 'SIN AVANCE',
        avance: {},
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
        avance: {},
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
        avance: {},
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
        avance: {},
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
        avance: {},
      },
    ];

    //  filtro para traer solo en las fechas indicadas.
    // for (let i = 0; i < this.PEM.length; i++) {
    //   if (this.PEM[i].inicio > new Date("2024-03-31T06:00:00.000Z") && this.PEM[i].inicio < new Date("2024-05-01T06:00:00.000Z")) {
    //
    //   }
    // }

    // Filtro para traer un rubro en especifico.
    // for (let i = 0; i < this.PEM.length; i++) {
    //   if (this.PEM[i].rubro === 'HALLAZGO DE INTEGRIDAD MECANICA') {
    //
    //   }
    // }
  }

  ngOnInit() {
    this.mesSeleccionado();
    this.dataCentrodeProceso();
    this.dia = this.route.snapshot.paramMap.get('dia');
    this.mes = this.route.snapshot.paramMap.get('mes');
    this.embarcacion = this.route.snapshot.paramMap.get('embarcacion');
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

    //Funcion donde se extrae las actividades de embarcacion desde el inicio de mes hasta el dia seleccionado.
    for (let i = 0; i < this.PEM.length; i++) {
      if (
        this.PEM[i].inicio >
          new Date('2024-' + this.mes + '-01T06:00:00.000Z') &&
        this.PEM[i].inicio <
          new Date('2024-' + this.mes + '-' + this.dia + 'T23:00:00.000Z') &&
        this.PEM[i].recurso === 'EMBARCACIONES'
      ) {
        switch (this.PEM[i].rubro) {
          case 'HALLAZGO DE INTEGRIDAD MECANICA': {
            this.rubroHimsCantidadE += 1;
            break;
          }
          case 'REQUERIMIENTO OPERATIVO': {
            this.rubroRequerimientoOperativoCantidadE += 1;
            break;
          }
          case 'REQ OPERATIVO': {
            this.rubroRequerimientoOperativoCantidadE += 1;
            break;
          }
          case 'ANOMALIA': {
            this.rubroAnomaliaCantidadE += 1;
            break;
          }
          case 'AMARRE DE POZOS': {
            this.rubroAmarreDePozosCantidadE += 1;
            break;
          }
          case 'MANTENIMIENTO ESTRUCTURAL': {
            this.rubroMantenimientoEstructuralCantidadE += 1;
            break;
          }
        }
      }
    }

    //Funcion donde se extrae las actividades de cuadrillas desde el inicio de mes hasta el dia seleccionado.
    for (let i = 0; i < this.PEM.length; i++) {
      if (
        this.PEM[i].inicio >
          new Date('2024-' + this.mes + '-01T06:00:00.000Z') &&
        this.PEM[i].inicio <
          new Date('2024-' + this.mes + '-' + this.dia + 'T23:00:00.000Z') &&
        this.PEM[i].recurso === 'CUADRILLAS'
      ) {
        switch (this.PEM[i].rubro) {
          case 'HALLAZGO DE INTEGRIDAD MECANICA': {
            this.rubroHimsCantidadC += 1;
            break;
          }
          case 'REQUERIMIENTO OPERATIVO': {
            this.rubroRequerimientoOperativoCantidadC += 1;
            break;
          }
          case 'REQ OPERATIVO': {
            this.rubroRequerimientoOperativoCantidadC += 1;
            break;
          }
          case 'ANOMALIA': {
            this.rubroAnomaliaCantidadC += 1;
            break;
          }
          case 'AMARRE DE POZOS': {
            this.rubroAmarreDePozosCantidadC += 1;
            break;
          }
          case 'MANTENIMIENTO ESTRUCTURAL': {
            this.rubroMantenimientoEstructuralCantidadC += 1;
            break;
          }
        }
      }
    }

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
        "HIM's",
        'Req. Operativo',
        'Amarre de pozos',
        'Mantenimiento Estructural',
        'Anomalia',
      ],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Menu',
          data: [
            this.rubroHimsCantidadE,
            this.rubroRequerimientoOperativoCantidadE,
            this.rubroAmarreDePozosCantidadE,
            this.rubroMantenimientoEstructuralCantidadE,
            this.rubroAnomaliaCantidadE,
          ],
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

    this.dataCrestTarascoCuadrillas = {
      labels: [
        "HIM's",
        'Req. Operativo',
        'Amarre de pozos',
        'Mantenimiento Estructural',
        'Anomalia',
      ],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Menu',
          data: [
            this.rubroHimsCantidadC,
            this.rubroRequerimientoOperativoCantidadC,
            this.rubroAmarreDePozosCantidadC,
            this.rubroMantenimientoEstructuralCantidadC,
            this.rubroAnomaliaCantidadC,
          ],
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
        "HIM's",
        'Req. Operativo',
        'Amarre de pozos',
        'Mantenimiento Estructural',
        'Anomalia',
      ],
      plugins: [ChartDataLabels],
      datasets: [
        {
          label: 'Menu',
          data: [
            this.rubroHimsCantidadE,
            this.rubroRequerimientoOperativoCantidadE,
            this.rubroAmarreDePozosCantidadE,
            this.rubroMantenimientoEstructuralCantidadE,
            this.rubroAnomaliaCantidadE,
          ],
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
    if (e.element.index === 0) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/hims',
      ]);
    }
    if (e.element.index === 1) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/requerimiento-operativo',
      ]);
    }
    if (e.element.index === 2) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/amarre-pozos',
      ]);
    }
    if (e.element.index === 3) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/mantenimiento-estructural',
      ]);
    }
    if (e.element.index === 4) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/anomalia',
      ]);
    }
    if (e.element.index === 5) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/levantamientos',
      ]);
    }
    if (e.element.index === 6) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/mantenimiento-correctivo-linea',
      ]);
    }
    if (e.element.index === 7) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/mantenimiento-preventivo-linea',
      ]);
    }
    if (e.element.index === 8) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/mantenimiento-preventivo-recipiente',
      ]);
    }
    if (e.element.index === 9) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/mantenimiento-preventivo-estructural',
      ]);
    }
    if (e.element.index === 10) {
      this.router.navigate([
        'centros-de-proceso/' +
          this.centroDeProceso +
          '/opciones/ReportesDiarios/' +
          this.embarcacion +
          '/' +
          this.selectedPEM +
          '/' +
          this.dia +
          '/actividades/' +
          this.recurso +
          '/prefabricados',
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
            break;
          }
          case 'DosBocas': {
            break;
          }
          case 'Abkatun-A': {
            break;
          }
          case 'Pol-A': {
            break;
          }
          case 'Abkatun-N1': {
            break;
          }
        }
        break;
      }
      case 'Febrero': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
            break;
          }
          case 'DosBocas': {
            break;
          }
          case 'Abkatun-A': {
            break;
          }
          case 'Pol-A': {
            break;
          }
          case 'Abkatun-N1': {
            break;
          }
        }
        break;
      }
      case 'Marzo': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
            break;
          }
          case 'DosBocas': {
            break;
          }
          case 'Abkatun-A': {
            break;
          }
          case 'Pol-A': {
            break;
          }
          case 'Abkatun-N1': {
            break;
          }
        }
        break;
      }
      case 'Abril': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
            break;
          }
          case 'DosBocas': {
            break;
          }
          case 'Abkatun-A': {
            break;
          }
          case 'Pol-A': {
            break;
          }
          case 'Abkatun-N1': {
            break;
          }
        }
        break;
      }
      case 'Mayo': {
        switch (this.centroDeProceso) {
          case 'Litoral-A': {
            break;
          }
          case 'DosBocas': {
            break;
          }
          case 'Abkatun-A': {
            break;
          }
          case 'Pol-A': {
            break;
          }
          case 'Abkatun-N1': {
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
