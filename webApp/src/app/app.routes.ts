import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FichaTecnicaComponent } from './ficha-tecnica/ficha-tecnica.component';
import { FichaTecnicaFOComponent } from './ficha-tecnica-fo/ficha-tecnica-fo.component';
import { AnomaliasTablesComponent } from './components/tables/anomalias-tables/anomalias-tables.component';
import { ResumenHallazgosComponent } from './components/resumen/resumen-hallazgos/resumen-hallazgos.component';
import { ResumenPetComponent } from './components/resumen/resumen-pet/resumen-pet.component';
import { ResumenAnomaliasComponent } from './components/resumen/resumen-anomalias/resumen-anomalias.component';
import { DashboardEmbarcacionesComponent } from './components/embarcaciones/dashboard-embarcaciones/dashboard-embarcaciones.component';
import { PrioridadAltaComponent } from './components/udc/prioridad-alta/prioridad-alta.component';
import { CentrosDeProcesoComponent } from './components/embarcaciones/centros-de-proceso/centros-de-proceso.component';
import { ActividadesProgramadasComponent } from './components/embarcaciones/estatus-actividades/actividades-programadas/actividades-programadas.component';
import { ActividadesRealizadasComponent } from './components/embarcaciones/estatus-actividades/actividades-realizadas/actividades-realizadas.component';
import { ActividadesRealizadasFueraDeProgramaComponent } from './components/embarcaciones/estatus-actividades/actividades-realizadas-fuera-de-programa/actividades-realizadas-fuera-de-programa.component';
import { ActividadesRealizadasRezagadasComponent } from './components/embarcaciones/estatus-actividades/actividades-realizadas-rezagadas/actividades-realizadas-rezagadas.component';
import { ProgramadasTotalComponent } from './components/embarcaciones/total-actividades/programadas-total/programadas-total.component';
import { RezagadasTotalComponent } from './components/embarcaciones/total-actividades/rezagadas-total/rezagadas-total.component';
import { RealizadasTotalComponent } from './components/embarcaciones/total-actividades/realizadas-total/realizadas-total.component';
import { FueraDeProgramaTotalComponent } from './components/embarcaciones/total-actividades/fuera-de-programa-total/fuera-de-programa-total.component';
import { ReportesDiariosComponent } from './components/reportes-diarios/reportes-diarios.component';
import { ServiciosCriticosComponent } from './components/reportes-diarios/servicios-criticos/servicios-criticos.component';

export const routes: Routes = [
  { path: '', title: 'Login', component: LoginComponent },
  //Modulos de la Sidebar
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones',
    title: 'Inicio',
    component: InicioComponent,
  },
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  {
    path: 'ficha-tecnica',
    title: 'Ficha Técnica',
    component: FichaTecnicaComponent,
  },
  {
    path: 'ficha-tecnicaFo/programado/:id',
    title: 'Ficha Técnica FO',
    component: FichaTecnicaFOComponent,
  },
  {
    path: 'ficha-tecnicaFo/programado/:id',
    title: 'Ficha Técnica FO',
    component: FichaTecnicaFOComponent,
  },
  {
    path: 'centros-de-proceso',
    title: 'Centros de Proceso',
    component: CentrosDeProcesoComponent,
  },
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/PEM',
    title: 'PEM',
    component: DashboardEmbarcacionesComponent,
  },
  //Reportes diarios
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/ReportesDiarios',
    title: 'Reporte Diario',
    component: ReportesDiariosComponent,
  },
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/ReportesDiarios/servicio-critico/:mes/:servicio',
    title: 'Servicio Critico',
    component: ServiciosCriticosComponent,
  },
  //Reportes diarios cierre

  // Tablas
  {
    path: 'anomalias-informacion',
    title: 'Anomalias',
    component: AnomaliasTablesComponent,
  },
  // Resumenes con graficas.
  {
    path: 'hallazgos-resumen',
    title: 'Hallazgos Resumen',
    component: ResumenHallazgosComponent,
  },
  { path: 'pet-resumen', title: 'PET Resumen', component: ResumenPetComponent },
  {
    path: 'anomalias-resumen',
    title: 'Anomalías Resumen',
    component: ResumenAnomaliasComponent,
  },
  {
    path: 'embarcaciones-dashboard',
    title: 'Embarcaciones Dashboard',
    component: DashboardEmbarcacionesComponent,
  },
  {
    path: 'udc-prioridad-alta',
    title: 'Udc Prioridad Alta',
    component: PrioridadAltaComponent,
  },
  // Vistas sobre el total de las actividades realizadas/programadas/rezagadas/fuera
  //de programa mensualmente por las embarcaciones o cuadrillas
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/PEM/:mes/:embarcacion/programado',
    title: 'Programadas',
    component: ProgramadasTotalComponent,
  },
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/PEM/:embarcacion/realizado',
    title: 'Realizadas',
    component: RealizadasTotalComponent,
  },
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/PEM/:embarcacion/rezago',
    title: 'Rezagadas',
    component: RezagadasTotalComponent,
  },
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/PEM/:embarcacion/fuera-de-programa',
    title: 'Fuera de Programa',
    component: FueraDeProgramaTotalComponent,
  },
  // Vistas sobre las actividades realizadas/programadas/rezagadas/fuera de programa diariamente por las embarcaciones o cuadrillas
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/PEM/:embarcacion/programado/:id',
    title: 'Programadas',
    component: ActividadesProgramadasComponent,
  },
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/PEM/:embarcacion/realizado/:id',
    title: 'Realizadas',
    component: ActividadesRealizadasComponent,
  },
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/PEM/:embarcacion/rezago/:id',
    title: 'Rezagadas Realizadas',
    component: ActividadesRealizadasRezagadasComponent,
  },
  {
    path: 'centros-de-proceso/:centrodeproceso/opciones/PEM/:embarcacion/fuera-de-programa/:id',
    title: 'Fuera de Programa Realizadas',
    component: ActividadesRealizadasFueraDeProgramaComponent,
  },

  { path: '**', component: LoginComponent }, // Wildcard route for a 404 page
];
