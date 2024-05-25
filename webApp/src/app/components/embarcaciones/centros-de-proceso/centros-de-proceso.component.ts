import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-centros-de-proceso',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './centros-de-proceso.component.html',
  styleUrl: './centros-de-proceso.component.css',
})
export class CentrosDeProcesoComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.snapshot.paramMap.get('centrodeproceso');
  }

  goToCentroLitoralA() {
    console.log('Dashboard');
    this.router.navigate(['/centros-de-proceso/' + 'Litoral-A' + '/dashboard']);
  }

  goToCentroDosBocas() {
    console.log('Dashboard');
    this.router.navigate(['/centros-de-proceso/' + 'DosBocas' + '/dashboard']);
  }

  goToCentroAbkatunA() {
    console.log('Dashboard');
    this.router.navigate(['/centros-de-proceso/' + 'Abkatun-A' + '/dashboard']);
  }

  goToCentroPolA() {
    console.log('Dashboard');
    this.router.navigate(['/centros-de-proceso/' + 'Pol-A' + '/dashboard']);
  }

  goToCentroAbkatunN1() {
    console.log('Dashboard');
    this.router.navigate([
      '/centros-de-proceso/' + 'Abkatun-N1' + '/dashboard',
    ]);
  }
}
