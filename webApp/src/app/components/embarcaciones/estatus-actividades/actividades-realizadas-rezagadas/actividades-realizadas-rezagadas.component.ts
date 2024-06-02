import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../layouts/header/header.component';
import { SidebarComponent } from '../../../../layouts/sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-actividades-realizadas-rezagadas',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, TableModule,
    CommonModule,
    ButtonModule,],
  templateUrl: './actividades-realizadas-rezagadas.component.html',
  styleUrl: './actividades-realizadas-rezagadas.component.css'
})
export class ActividadesRealizadasRezagadasComponent implements OnInit {
  centroDeProceso: any;
  embarcacion: any;
  dia: any;
  cols!: any[];
  consultaEmbarcacion: any;
  consultaCuadrilla: any;

  //Litoral

  embarcacionesArtemis: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    estatus: string;
  }[] = [];

  cuadrillasArtemis: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    estatus: string;
  }[] = [];

  embarcacionesCrestTarasco: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    finReal: string;
    estatus: string;

  }[] = [];

  cuadrillasCrestTarasco: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    finReal: string;
    estatus: string;
  }[] = [];

  //Cierre Litoral

  //Terminal Marítima Dos Bocas

  embarcacionesDosBocas: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    estatus: string;
  }[] = [];

  cuadrillasDosBocas: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    estatus: string;
  }[] = [];

  //Cierre Terminal Marítima Dos Bocas

  //Abkatun-A

  embarcacionesToisaProteus: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    estatus: string;
  }[] = [];

  cuadrillasToisaProteus: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    estatus: string;
  }[] = [];

  //Cierre Abkatun-A

  //Pol-A

  embarcacionesPolA: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    estatus: string;
  }[] = [];

  cuadrillasPolA: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    estatus: string;
  }[] = [];

  //Cierre Pol-A

  //
  embarcacionesAbkatunN1: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    estatus: string;
  }[] = [];

  cuadrillasAbkatunN1: {
    pem: string;
    rubro: string;
    servicio: string;
    inst: string;
    recurso: string;
    csu: string;
    actividad: string;
    inicioProg: string;
    finProg: string;
    estatus: string;
  }[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.centroDeProceso = this.route.snapshot.paramMap.get('centrodeproceso');
    this.embarcacion = this.route.snapshot.paramMap.get('embarcacion');
    this.dia = this.route.snapshot.paramMap.get('id');

    this.consultaEmbarcacion = 'embarcaciones' + this.embarcacion;
    this.consultaCuadrilla = 'cuadrillas' + this.embarcacion;

    console.log(this.consultaEmbarcacion);
  }

  ngOnInit() {
    this.embarcacionesCrestTarasco = [
      {
        pem: 'FP',
        rubro: 'REQUERIMIENTO OPERATIVO',
        servicio: 'MAR',
        inst: 'PLATAF. DE PRODUCCION PB-LITORAL-A',
        recurso: 'EMBARCACIONES',
        csu: '268-24-1003',
        actividad:
          'SUSTITUCIÓN DE ENVOLVENTE NO METÁLICA EN UDC: BSELITA-GBP-010, CIRCUITO DE 24"Ø DEL ENFRIADOR DE GAS DE TERCERA ETAPA EC-3101 HACIA EL RECTIFICADOR DE GAS DE TERCERA ETAPA FA-3103.',
        inicioProg: '02/29/2024',
        finProg: '03/31/2024',
        finReal: '04/02/2024',
        estatus: 'REALIZADO',
      },
      {
        pem: 'FP',
        rubro: 'HALLAZGO DE INTEGRIDAD MECANICA',
        servicio: 'MAR',
        inst: 'PLATAF. DE PRODUCCION PB-LITORAL-A',
        recurso: 'EMBARCACIONES',
        csu: '268-24-1004',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: BSELITA-GBP-011, FN, CIRCUITO DE 24"Ø DEL RECTIFICADOR DE GAS DE TERCERA ETAPA FA-3103 HACIA VÁLVULAS PSV-1451/1452, SDV-1451 Y PV-3103, ALCANCE: EL E-77 (TEE RED. 20"X16  Ø) EN LA ZONA DE CONTACTO CON EL SOPORTE CON SEVERO DETERIORO POR CORROSION, UNION SOLDADA ENTRE LOS E-79 (CODO DE 90° 16  Ø) Y E-80 (CARRETE 16  Ø), E-118 (VÁLV.DE BOLA 4 Ø Y E-133 (VÁLV.DE BOLA 4 Ø ) CON SEVERO DETERIORO POR LA CORROSION, CON INDICACIÓN DEL TIPO ZONA DE INCLUSIONES (IND. 63.1) EN E-63 CARRETE BISELADO DE 24.0"Ø, EXCEDE CRITERIOS DE ACEPTACIÓN, SE DEBE REALIZAR ACCIÓN DE MITIGACIÓN',
        inicioProg: '02/29/2024',
        finProg: '03/31/2024',
        finReal: '04/04/2024',
        estatus: 'REALIZADO',
      },
    ];

    this.cuadrillasCrestTarasco = [
      {
        pem: 'FP',
        rubro: 'HALLAZGO DE INTEGRIDAD MECANICA',
        servicio: '',
        inst: 'ENLACE LITORAL',
        recurso: 'CUADRILLAS',
        csu: '268-24-1790',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ERELT-P-028 "CIRCUITO DE 20"Ø DE VALVULAS MANUALES DE 24"Ø EN LA PLATAFORMA ENLACE LITORAL HACIA VALVULA DE BLOQUEO LLEGADA DE PP-KAB-C EN PB-T LITORAL-A',
        inicioProg: '03/27/2024',
        finProg: '01/04/2024',
        finReal: '04/08/2024',
        estatus: 'REALIZADO',
      },
      {
        pem: 'FP',
        rubro: 'HALLAZGO DE INTEGRIDAD MECANICA',
        servicio: '',
        inst: 'CA-LIT-A',
        recurso: 'CUADRILLAS',
        csu: '268-24-1791',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ERELT-P-028 "CIRCUITO DE 20"Ø DE VALVULAS MANUALES DE 24"Ø EN LA PLATAFORMA ENLACE LITORAL HACIA VALVULA DE BLOQUEO LLEGADA DE PP-KAB-C EN PB-T LITORAL-A',
        inicioProg: '03/27/2024',
        finProg: '01/04/2024',
        finReal: '04/08/2024',
        estatus: 'REALIZADO',
      },
    ];
  }

}
