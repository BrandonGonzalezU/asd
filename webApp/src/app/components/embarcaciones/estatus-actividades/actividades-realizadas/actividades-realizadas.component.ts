import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../layouts/header/header.component';
import { SidebarComponent } from '../../../../layouts/sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-actividades-realizadas',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    TableModule,
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './actividades-realizadas.component.html',
  styleUrl: './actividades-realizadas.component.css',
})
export class ActividadesRealizadasComponent implements OnInit {
  centroDeProceso: any;
  embarcacion: any;
  dia: any;
  cols!: any[];
  searchValue: string | undefined;
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
    estatus: string;
  }[] = [];

  embarcacionesCrestTarascoDiario: {
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

  cuadrillasCrestTarascoDiario: {
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
    this.embarcacionesArtemis = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '05/14/2024',
        finProg: '05/14/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
    ];

    this.cuadrillasArtemis = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
    ];

    this.embarcacionesCrestTarasco = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2649',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-GAP-008, FN, CIRCUITO DE 30"Ø INTERCONEXION CON DEL RECTIFICADOR DE PRIMERA ETAPA FA-5101  HACIA VÁLVULAS DE CORTE SDV-5201A/B/C/D Y SDV-5202A/B/C/D Y VÁLVULA DE CONTROL PV-5109/103A/R, ALCANCE: EL CIRCUITO DE TUBERÍA TIENE (1) INDICACIÓN TIPO DC (PAR GALVANICO) (IND. 267.1) EN EL E-267 BRIDA (CAJA PARA SOLDAR) DE 1.5", DEBIDO A AVANZADA CORROSIÓN. LOS ELEMENTOS E-185, E-188, E-189, E.316 Y E-320 PRESENTAN ZONAS DE INCLUSIONES, SUSTITUCIÓN DE LOS ELEMENTOS / INSTALAR ENVOLVENTE NO METÁLICA.',
        inicioProg: '04/12/2024',
        finProg: '04/24/2024',
        estatus: 'Realizado',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2649',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-GAP-008, FN, CIRCUITO DE 30"Ø INTERCONEXION CON DEL RECTIFICADOR DE PRIMERA ETAPA FA-5101  HACIA VÁLVULAS DE CORTE SDV-5201A/B/C/D Y SDV-5202A/B/C/D Y VÁLVULA DE CONTROL PV-5109/103A/R, ALCANCE: EL CIRCUITO DE TUBERÍA TIENE (1) INDICACIÓN TIPO DC (PAR GALVANICO) (IND. 267.1) EN EL E-267 BRIDA (CAJA PARA SOLDAR) DE 1.5", DEBIDO A AVANZADA CORROSIÓN. LOS ELEMENTOS E-185, E-188, E-189, E.316 Y E-320 PRESENTAN ZONAS DE INCLUSIONES, SUSTITUCIÓN DE LOS ELEMENTOS / INSTALAR ENVOLVENTE NO METÁLICA.',
        inicioProg: '04/12/2024',
        finProg: '04/23/2024',
        estatus: 'Realizado',
      },
    ];

    this.cuadrillasCrestTarasco = [
      {
        pem: 'ABR',
        rubro: 'REQ OPERATIVO',
        servicio: 'APOYO A LA OPERACION',
        inst: 'PLATAF. DE COMPRESION CB-LITORAL-A',
        recurso: 'CUADRILLAS',
        csu: '268-24-0728',
        actividad:
          'APOYO OPERATIVO (ANDAMIOS, INSTALACIÓN Y RETIRO DE BLOQUEOS MECÁNICOS, SUSTITUCIÓN / DESMONTAJE/ MONTAJE DE VÁLVULAS, FILTROS TIPO CANASTA, CONOS DE BRUJA, EQUIPOS, MOTORES, VENTILADORES, BOMBAS, PIERNAS DE NIVEL, MANGUERAS, FIGURAS 8 Y SUSTITUCIÓN DE SELLOS).',
        inicioProg: '04/01/2024',
        finProg: '04/7/2024',
        estatus: 'REALIZADO',
      },
      {
        pem: 'ABR',
        rubro: 'REQ OPERATIVO',
        servicio: 'APOYO A LA OPERACION',
        inst: 'PLATAF. DE ENLACE LITORAL',
        recurso: 'CUADRILLAS',
        csu: '268-24-0856',
        actividad:
          'APOYO OPERATIVO (ANDAMIOS, INSTALACIÓN Y RETIRO DE BLOQUEOS MECÁNICOS, SUSTITUCIÓN / DESMONTAJE/ MONTAJE DE VÁLVULAS, FILTROS TIPO CANASTA, CONOS DE BRUJA, EQUIPOS, MOTORES, VENTILADORES, BOMBAS, PIERNAS DE NIVEL, MANGUERAS, FIGURAS 8 Y SUSTITUCIÓN DE SELLOS).',
        inicioProg: '04/01/2024',
        finProg: '04/7/2024',
        estatus: 'REALIZADO',
      },
      {
        pem: 'ABR',
        rubro: 'REQ OPERATIVO',
        servicio: 'APOYO A LA OPERACION',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'CUADRILLAS',
        csu: '268-24-0982',
        actividad:
          'APOYO OPERATIVO (ANDAMIOS, INSTALACIÓN Y RETIRO DE BLOQUEOS MECÁNICOS, SUSTITUCIÓN / DESMONTAJE/ MONTAJE DE VÁLVULAS, FILTROS TIPO CANASTA, CONOS DE BRUJA, EQUIPOS, MOTORES, VENTILADORES, BOMBAS, PIERNAS DE NIVEL, MANGUERAS, FIGURAS 8 Y SUSTITUCIÓN DE SELLOS).',
        inicioProg: '04/01/2024',
        finProg: '04/8/2024',
        estatus: 'REALIZADO',
      },
      {
        pem: 'ABR',
        rubro: 'MANTENIMIENTO ESTRUCTURAL',
        servicio: 'MANTENIMIENTO PREVENTIVO ESTRUCTURAL',
        inst: 'PLATAF. DE COMPRESION CB-LITORAL-A',
        recurso: 'CUADRILLAS',
        csu: '268-24-1621',
        actividad:
          'MANTENIMIENTO PREVENTIVO AL SISTEMA ESTRUCTURAL EN LA PALATAFORMA CB-LITORAL-A (PROTECCIÓN ANTICORROSIVA).',
        inicioProg: '03/25/2024',
        finProg: '04/12/2024',
        estatus: 'REALIZADO',
      },
      {
        pem: 'ABR',
        rubro: 'REQ OPERATIVO',
        servicio: 'APOYO A LA OPERACION',
        inst: 'ABK-D PERMANENTE',
        recurso: 'CUADRILLAS',
        csu: '268-22-2365',
        actividad:
          'RETIRO DE AISLAMIENTO TÉRMICO EXISTENTE EN UDC: ECOABKD-GCO-033, CIRCUITO DE 6"Ø CABEZAL DE DISTRIBUCIÓN DE GAS DE ARRANQUE HACIA TURBOCOMPRESORES TC-A/B DEL PA-3101A/B',
        inicioProg: '04/01/2024',
        finProg: '04/23/2024',
        estatus: 'REALIZADO',
      },
    ];

    for (let i = 0; i < this.embarcacionesCrestTarasco.length; i++) {
      if (this.embarcacionesCrestTarasco[i].finProg === '04/' + this.dia + '/2024') {
        this.embarcacionesCrestTarascoDiario[i] = this.embarcacionesCrestTarasco[i]
      }
    }

    for (let i = 0; i < this.cuadrillasCrestTarasco.length; i++) {
      if (this.cuadrillasCrestTarasco[i].finProg === '04/' + this.dia + '/2024') {
        this.cuadrillasCrestTarascoDiario[i] = this.cuadrillasCrestTarasco[i]
      }
    }



    this.embarcacionesDosBocas = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '05/14/2024',
        finProg: '05/14/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
    ];

    this.cuadrillasDosBocas = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
    ];

    this.embarcacionesToisaProteus = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '05/14/2024',
        finProg: '05/14/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
    ];

    this.cuadrillasToisaProteus = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
    ];

    this.embarcacionesPolA = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '05/14/2024',
        finProg: '05/14/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
    ];

    this.cuadrillasPolA = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
    ];

    this.embarcacionesAbkatunN1 = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '05/14/2024',
        finProg: '05/14/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad:
          'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },
    ];

    this.cuadrillasAbkatunN1 = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad:
          'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      },
    ];


    this.cols = [
      { field: 'pem', header: 'PEM' },
      { field: 'rubro', header: 'RUBRO' },
      { field: 'servicio', header: 'SERVICIO' },
      { field: 'inst', header: 'INST' },
      { field: 'recurso', header: 'RECURSO' },
      { field: 'csu', header: 'CSU' },
      { field: 'inicioProg', header: 'INICIO PROG' },
      { field: 'finProg', header: 'FIN PROG' },
      { field: 'estatus', header: 'ESTATUS' },
    ];
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = '';
  }
}
