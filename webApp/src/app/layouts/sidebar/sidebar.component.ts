import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ImageModule, AvatarModule, StyleClassModule, ScrollPanelModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor(private router: Router) { }

  goToFichaTecnica() {
    console.log('ficha tecnica');
    this.router.navigate(['/ficha-tecnica']);
  }

  goToInicio(){
    console.log('inicio');
    this.router.navigate(['/inicio']);
  }

  goToFichaTecnicaFO() {
    console.log('ficha tecnica FO');
    this.router.navigate(['/ficha-tecnicaFo']);
  }

  goToAnomaliasTable() {
    console.log('Tablas de anomalia');
    this.router.navigate(['/anomalias-informacion']);
  }

  goToDashboard() {
    console.log('Dashboard');
    this.router.navigate(['/dashboard']);
  }

  goToCentrosDeProceso() {
    console.log('Centros de Proceso');
    this.router.navigate(['/centros-de-proceso']);
  }



}
