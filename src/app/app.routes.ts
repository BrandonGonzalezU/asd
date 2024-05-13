import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FichaTecnicaComponent } from './ficha-tecnica/ficha-tecnica.component';
import { FichaTecnicaFOComponent } from './ficha-tecnica-fo/ficha-tecnica-fo.component';
import { AnomaliasTablesComponent } from './components/tables/anomalias-tables/anomalias-tables.component';
import { ResumenHallazgosComponent } from './components/resumen/resumen-hallazgos/resumen-hallazgos.component';
import { ResumenPetComponent } from './components/resumen/resumen-pet/resumen-pet.component';
import { ResumenAnomaliasComponent } from './components/resumen/resumen-anomalias/resumen-anomalias.component';
import { DashboardEmbarcacionesComponent } from './components/embarcaciones/dashboard-embarcaciones/dashboard-embarcaciones.component';

export const routes: Routes = [
    { path: '', title: "Login", component: LoginComponent },
    { path: 'dashboard', title: "Dashboard", component: DashboardComponent },
    { path: 'ficha-tecnica', title: "Ficha Técnica", component: FichaTecnicaComponent },
    { path: 'ficha-tecnicaFo', title: "Ficha Técnica FO", component: FichaTecnicaFOComponent },
    // Tablas
    { path: 'anomalias-informacion', title: "Anomalias", component: AnomaliasTablesComponent },
    // Resumenes con graficas.
    { path: 'hallazgos-resumen', title: "Hallazgos Resumen", component: ResumenHallazgosComponent },
    { path: 'pet-resumen', title: "PET Resumen", component: ResumenPetComponent },
    { path: 'anomalias-resumen', title: "Anomalías Resumen", component: ResumenAnomaliasComponent },
    { path: 'embarcaciones-dashboard', title: "Embarcaciones Dashboard", component: DashboardEmbarcacionesComponent },


    { path: '**', component: LoginComponent },  // Wildcard route for a 404 page
];
