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

@Component({
  selector: 'app-ficha-tecnica-fo',
  standalone: true,
  imports: [NgxChartsModule, ToolbarModule, InputTextModule, ButtonModule, ImageModule, DialogModule, TableModule, PanelModule, DataViewModule,AvatarModule,AvatarGroupModule],
  templateUrl: './ficha-tecnica-fo.component.html',
  styleUrl: './ficha-tecnica-fo.component.css'
})
export class FichaTecnicaFOComponent {

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
      udc: 'ABAPB2-DA-FA-4102',
      udcAnterior: 'ABKDPE-CE-001',
      descripcion: 'SEPARADOR   DE LÍQUIDOS DE DESFOGUE',
      tipoUDC: 'CIRCUITO DE TUBERIA',
      ubicacion: 'PEP-PRO-ABD-IPECO',
      sistema: 'ACEITE SEPARADO (DESCARGA)',
      complejo: 'AN1 - INYECCION DE AGUA',
      tipoEquipo: 'CIRCUITO DE TUBERIA',
      instalacion: 'BATERIA DE SEPARACION CRUDO GAS ABKD PER',
      isometricoTradicional: '7568-ISO-IT-156 (DBECO3-NIS-006)',
      fechaInspeccion: '23/01/2018',
      fechaReporte: '23/01/2018',
      justificacionFO: 'Por sustitución de paquete de acondicionamiento de gas combustible.',
      tipoFO: 'DEFINITIVA',
      situacionOperacion: 'CON FLUIDO ENTRAMPADO',
      fechaReporteInspeccion: '03/06/2014',
      fechaProximaInspeccion: '05/10/2024',
      activoGerencia: 'APAPCH - ABK-POOL-CHU',
      observacionesLibranza: '1.- APLICACION DE PROTECCION ANTICORROSIVA 2.-ELEMENTO 28  VALVULA COLOCAR VOLANTE 3.- ADECUAR SOPORTES A LA LINEA Y COLOCAR ABRAZADERAS.',
      desviacion: 'CONTRATO:428813856 DESCRIPCIÓN: ""REHABILITACION DE AISLAMIENTO TERMICO EN RECIPIENTES A PRESION, LINEAS DE TUBERIAS DE PROCESO Y DUCTOS DE ESCAPE EN LOS CENTROS DE PROCESO ABK-A, POL-A Y CENTRO DE OPERATIVO ABK-N1 DEL ACTIVO DE PRODUCCION ABKATUN POL CHUC, SPRMSO"" COMPAÑIA:COTER',
      observacionesInspeccion: 'SE RECOMIENDA REALIZAR LIMPIEZA ADECUADA Y APLICAR PROTECCIÓN ANTICORROSIVA Y COLOCAR AISLANTE ELECTRICO EN LA UNIÓN ROSCADA PARA EVITAR LA CONEXIÓN ELÉCTRICA ÁNODO-CÁTODO EN EL ELEMENTO E18.PARA EL SOPORTE SP-1 SE RECOMIENDA SUSTITUIR ABRAZADERA TIPO “U”. SE RECOMIENDA REALIZAR LIMPIEZA QUÍMICA ADECUADA EN EL ELEMENTO E-19. PARA EL ELEMENTO E-24 SE RECOMIENDA SUSTITUIR ESPÁRRAGOS CORTOS Y TUERCAS, DESPUÉS DEL APRIETE VERIFICAR QUE SOBRESALGAN DE DOS A TRES CUERDAS EN CADA EXTREMO. COLOCAR MANERAL EN VÁLVULA ELEMENTO E-14. ELIMINAR ZONA DE CONTACTO TUBO-SOPORTE MEDIANTE LA COLOCACIÓN DE UNA PLACA DE DESGASTE NO METÁLICA CORRECTAMENTE ADHERIDA Y ASÍ EVITAR LOS EFECTOS DE LA CORROSIÓN.'
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
