import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../../layouts/header/header.component';
import { SidebarComponent } from '../../layouts/sidebar/sidebar.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  dia: any;
  centroDeProceso: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.centroDeProceso = this.route.snapshot.paramMap.get('centrodeproceso');
  }

  goToHallazgosResumen() {
    console.log('Hallazgos Resumen');
    this.router.navigate(['/hallazgos-resumen']);
  }

  goToPetResumen() {
    console.log('PET Resumen');
    this.router.navigate(['/pet-resumen']);
  }

  goToAnomaliasResumen() {
    console.log('Anomalias Resumen');
    this.router.navigate(['/anomalias-resumen']);
  }

  goToPEM() {
    console.log('PEM');
    this.router.navigate([
      '/centros-de-proceso/' + this.centroDeProceso + '/opciones/PEM',
    ]);
  }

  goToReportesDiarios() {
    console.log('Reportes Diarios');
    this.router.navigate([
      '/centros-de-proceso/' +
        this.centroDeProceso +
        '/opciones/ReportesDiarios',
    ]);
  }
}
