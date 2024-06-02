import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { Router } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { HeaderComponent } from '../layouts/header/header.component';
import { SidebarComponent } from '../layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-ficha-tecnica',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, NgxChartsModule, ToolbarModule, InputTextModule, ButtonModule, ImageModule, DialogModule, TableModule, PanelModule, DataViewModule,AvatarModule,AvatarGroupModule],
  templateUrl: './ficha-tecnica.component.html',
  styleUrl: './ficha-tecnica.component.css'
})
export class FichaTecnicaComponent {
  constructor(private router: Router){}

  visible: boolean = false;
  visibleReport: boolean = false;
  visibleDesviacion: boolean = false;
  visibleAccion: boolean = false;
  showDialog() {
    this.visible = true;
  }
  showReporte(){
    this.visibleReport = true;
  }
  showDesviacion(){
    this.visibleDesviacion = true;
  }
  showAccion(){
    this.visibleAccion = true;
  }

  goToFichaTecnica(){
    console.log('dashboard desde ficha');
    this.router.navigate(['/dashboard']);
  }



  UDC = [
    {
      id: '1000',
      udc: 'ECOABKD-CE-001',
      udcAnterior: 'ABKDPE-CE-001',
      descripcion: 'CIRCUITO DE 10"Ø DE TURBOBOMBA 2 HACIA VALVULAS SDV-3151 Y PV-104B',
      tipoUDC: 'CIRCUITO DE TUBERIA',
      ubicacion: 'PEP-PRO-ABD-IPECO',
      sistema: 'ACEITE SEPARADO (DESCARGA)',
      complejo: 'AN1 - INYECCION DE AGUA',
      tipoEquipo: 'CIRCUITO DE TUBERIA',
      instalacion: 'BATERIA DE SEPARACION CRUDO GAS ABKD PER',
      isometricoTradicional: '7568-ISO-IT-156 (DBECO3-NIS-006)',
      fechaInspeccion: '23/01/2018',
      fechaReporte: '23/01/2018',
      fechaReporteInspeccion: '03/06/2014',
      fechaProximaInspeccion: '05/10/2024',
      activoGerencia: 'AIPLT - LITORAL DE TABASCO',
      accionCorrectiva: 'SE EMITIO NOTA INTERNA PARA DAR DE BAJA EL HALLAZGO DE INTEGRIDAD MECANICA. SE REQUIERE SE APLIQUE EL MANTENIMIENTO PREVENTIVO QUE SE SOLICITA EN EL REPORTE DE INSPECCIÓN COT-AI-ECOABKD-CA-005-2019.',
      desviacion: 'CONTRATO: 428813856. DESCRIPCIÓN: "REHABILITACION DE AISLAMIENTO TERMICO EN RECIPIENTES A PRESION, LINEAS DE TUBERIAS DE PROCESO Y DUCTOS DE ESCAPE EN LOS CENTROS DE PROCESO ABK-A, POL-A Y CENTRO DE OPERATIVO ABK-N1 DEL ACTIVO DE PRODUCCION ABKATUN POL CHUC, SPRMSO". COMPAÑÍA: COTER.',
      observacionesInspeccion: 'SUSTITUIR   LOS ELEMENTOS E-1234, 1238, 1239, 1240, 1243,1245, 1247,1248, 1249, 1250,   1251, 1252, 1253, 1254, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267,   1279, 1281, 1284, 1285, DEBIDO AQUE PRESENTAN SEVERO DETERIORO POR CORROSIÓN.   SE DICTAMINA DEGRADADCION POR CORROSION.     SUSTITUIR LOS E-1243 PRESENTA CSA, E-1245 Y E-586 PRESENTAN PERFORACION. SE   DICTAMINA FUERA DE NORMA.     LOS ELEMENTOS E-56, 285, 378, 399, 405, 420, 426A, 505A, 669, 722A, 728A,   734A, 777, 1211, 1292, 1358, 1371, 1387, 1411, 1431, 1527, 1783, 1800, 1807,   1824, 1894, 1933 SE OBSERVA QUE SON CONEXION INSERTO SOLDABLE, COLOCAR   CONEXION INTEGRALMENTE REFORZADA. SE DICTAMINA FUERA DE NORMA.     REPARA LA SOLDADURA DEL E-1817 DEBIDO A QUE PRESENTA INDICACION REDONDEADA,   SE DICTAMINA FUERA DE NORMA.     SUSTITUIR LOS ELEMENTOS E-120, 121, 122, 183, 184, 192, 225, 308, 309, 339,   343, 353, 355, 372, 372A, 372B, 438, 439, 455, 520, 521, 522, 523, 524, 528,   543, 544, 555, 556, 557, 566, 569, 586, 605, 621, 625, 634, 635, 638, 639,   640, 646, 649, 650, 651, 663, 664, 665, 666, 667, 668, 669, 892, 896, 898,   901, 902, 904, 904A, 1135, 1136, 1152, 1153, 1154, 1155, 1156, 1157, 1158,   1160, 1161, 1162, 1163, 1165, 1166, 1170, 1171, 1172, 1173, 1174, 1198, 1199,   1200, 1201, 1201A, 1202, 1203, 1370, 1371, 1372, 1387, 1388, 1388A, 1404,   1405, 1409, 1410, 1429, 1430, 1436, 1437, 1452, 1468, 1509, 1562, 1564, 1613,   1614, 1615, 1616, 1617, 1618, 1691, 1692, 1693, 1694, 1695, 1695A, 1695B,   1695C, 1695D, 1778, 1780, 1788, 1793, 1798, 1801, 1802, 1805, 1806, 1807,   1808, 1819, 1823, 1824, 1828, 1829, 1830, 1831, 1900, 1901, 1913 DEBIDO AQUE   PRESENTAN SEVERO DETERIORO POR CORROSIÓN. SE DICTAMINA DEGRADADCION POR   CORROSION.     SUSTITUIR E-1215 DEBIDO A QUE PRESENTA GRAPA MECANICA. SE DICTAMINA FUERA   DE NORMA.     SUSTITUIR LOS E-56, 63, 528, 1243, 1244, 1267 DEBIDO A QUE PRESENTAN CSA.   SE DICTAMINA FUERA DE NORMA.     SUSTITUIR LOS E-65, E86 (CARRETE 3"Ø), E-102 (CARRETE 4"Ø) E-1328   (CARRETE 6"Ø) E-1350 (CARRETE 8"Ø) E-1543 (COPLE SW 1.50"Ø)   E-1548, E-1550 (CARRETE 1.50"Ø) E-1701 (CARRETE 2"Ø) E-1710 (CODO   45º 4"Ø) E-1888, E-1889 (CARRETE 30"Ø)DEBIDO A QUE PRESENTAN CSA   LOC. , SE DICTAMINA FUERA DE NROMA.     SUSTITUIR LOS E-88 AL E-98 (CARRETE, RED. CON., CODO 90 SW, BRIDA SW,   VALVULA DE GLOBO SW, CONECTOR ROS. 3",1"Ø) E-993 (BRIDA WN   4"Ø) E-994 (CARRETE 4"Ø)DEBIDO A QUE PRESENTAN REPARACION TEMPORAL   (FIBRA DE CARBONO), SE DICTAMINA FUERA DE NORMA.     E-616 (CARRETE 16"Ø) E-874 (RED. CONC. 8"X6"Ø) PRESENTA CI,   SE DICTAMINA FUERA DE NORMA.     E-690 (CARRETE 24"Ø) PRESENTA ABOLLADURA, SE DICTAMINA FUERA DE   NORMA.     E-1208 (CARRETE 2"Ø) CMA LOC., SE DICTAMINA FUERA DE NORMA.     REPARAR LA SOLDAURA DEL E-1609 (CARRETE 10"Ø) E-1734 (CARRETE   10"Ø) DEBIDO A QUE PRESENTA CORROSION, SE DICTAMINA FUERA DE   NORMA.     E-1700 (CODO DE 90 2"Ø)PRESENTA CLA GEN. SE DICTAMINA CERCANO AL   LIMITE DE RETIRO.'
    },
  ];

  products = [
    {
      id: '1000',
      code: 'DBCBD5E-AI-S/TAG',
      name: 'OBRA',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'APAPCH',
      quantity: 5,
      inventoryStatus: 'INSTOCK',
      rating: 5
  },
  {
    id: '1000',
    code: 'DBBSEEST-P-FA-3105',
    name: 'MANTO TERRESTRE',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'APLT',
    quantity: 5,
    inventoryStatus: 'INSTOCK',
    rating: 5
},
{
  id: '1000',
  code: 'DBECO3-GAS-CS-301B',
  name: 'INGENIERIA',
  description: 'Product Description',
  image: 'bamboo-watch.jpg',
  price: 65,
  category: 'APLT-TMDB',
  quantity: 3,
  inventoryStatus: 'INSTOCK',
  rating: 5
},
  ];
}
