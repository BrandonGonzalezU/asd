import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../../../layouts/header/header.component';
import { SidebarComponent } from '../../../../layouts/sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-actividades-programadas',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, TableModule, CommonModule, ButtonModule],
  templateUrl: './actividades-programadas.component.html',
  styleUrl: './actividades-programadas.component.css'
})
export class ActividadesProgramadasComponent implements OnInit {
  centroDeProceso: any;
  embarcacion: any;
  dia: any;
  cols!: any[];
  searchValue: string | undefined;
  embarcaciones: {
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

  cuadrillas: {
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

    console.log(this.centroDeProceso, this.embarcacion, this.dia)
  }



  ngOnInit() {
    this.embarcaciones = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad: 'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
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
        actividad: 'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
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
        actividad: 'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      }, {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad: 'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      }, {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE COMPRESION CA-LITORAL-A',
        recurso: 'Embarcaciones',
        csu: '268-23-2709',
        actividad: 'ATENCIÓN DE HALLAZGO EN UDC: ECOLITA-DA-007, CIRCUITO DE 42"Ø DE TANQUES SEPARADORES DE DESFOGUES DE ALTA PRESIÓN FA-5751A/B HACIA QUEMADOR CB-5751, ALCANCE: SIETE INDICACIONES TIPO CORROSIÓN EN SOLDADURA, EN EL E-5 CARRETE BISELADO 24"Ø, E-10 CARRETE BISELADO 24"Ø Y E-12 CARRETE BISELADO 24"Ø, DICTAMEN FN, UNA INDICACIÓN TIPO DC EN E-36 BRIDA (CAJA PARA SOLDAR) DE 1.50"Ø CON DICTAMEN DC Y UNA INDICACIÓN TIPO ABOLLADURA EN EL ELEMENTO E-52 CARRETE BISELADO 42" LA CUAL EXCEDE LOS CRITERIOS DE ACEPTACIÓN',
        inicioProg: '14/feb/2024',
        finProg: '30/abr/2024',
        estatus: 'Ejecución',
      },

    ];

    this.cuadrillas = [
      {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad: 'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
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
        actividad: 'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
        inicioProg: '01/abr/2024',
        finProg: '30/abr/2024',
        estatus: 'SE',
      }, {
        pem: 'ABR',
        rubro: 'Hallazgo de Integridad Mecanica',
        servicio: 'Hallazgo de Integridad Mecanica',
        inst: 'PLATAF. DE PRODUCCION  PB-LITORAL-T',
        recurso: 'Cuadrillas',
        csu: '268-22-0026',
        actividad: 'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
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
        actividad: 'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
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
        actividad: 'ATENCION DE HALLAZGO EN UDC: ECOABKD-AI-003, FUGA, CIRCUITO DE 3"Ø DE ACUMULADOR DE AIRE SECO HA-3402, SECADORA DE AIRE PA-3500B HACIA CABEZALES DE DISTRIBUCIÓN, ALCANCE: SUSTITUIR EL E-2 (TEE RECTA 3"Ø), E-6 (CARRETE 3"Ø), E-7 (TEE RECTA 3"Ø), E-9 (CARRETE 2"Ø), E-24 (CARRETE 2"Ø), E-26 (CARRETE 2"Ø), E-28 (CARRETE 2"Ø), E-31 (CARRETE 2"Ø), E-33 (CARRETE 2"Ø) Y E-35 (CARRETE 2"Ø), POR PRESENTAR INDICACIONES TIPO PITTING CON PERDIDA DE CONTENCION, DICTAMEN FUGA.        ',
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
    this.searchValue = ''
  }
}

