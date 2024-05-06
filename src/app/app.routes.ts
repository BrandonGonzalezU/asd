import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FichaTecnicaComponent } from './ficha-tecnica/ficha-tecnica.component';
import { FichaTecnicaFOComponent } from './ficha-tecnica-fo/ficha-tecnica-fo.component';
import { AnomaliasTablesComponent } from './components/tables/anomalias-tables/anomalias-tables.component';


export const routes: Routes = [
    { path: '', title: "Login", component: LoginComponent },
    { path: 'dashboard', title: "Dashboard", component: DashboardComponent },
    { path: 'ficha-tecnica', title: "Ficha Técnica", component: FichaTecnicaComponent },
    { path: 'ficha-tecnicaFo', title: "Ficha Técnica FO", component: FichaTecnicaFOComponent },
    // Tablas
    { path: 'anomalias-informacion', title: "Anomalias", component: AnomaliasTablesComponent },

    { path: '**', component: LoginComponent },  // Wildcard route for a 404 page
];
