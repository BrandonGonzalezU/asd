import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../layouts/header/header.component';
import { SidebarComponent } from '../../../../layouts/sidebar/sidebar.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actividades-realizadas-fuera-de-programa',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './actividades-realizadas-fuera-de-programa.component.html',
  styleUrl: './actividades-realizadas-fuera-de-programa.component.css'
})
export class ActividadesRealizadasFueraDeProgramaComponent {
  centroDeProceso: any;
  embarcacion: any;
  dia: any;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.centroDeProceso = this.route.snapshot.paramMap.get('centrodeproceso');
    this.embarcacion = this.route.snapshot.paramMap.get('embarcacion');
    this.dia = this.route.snapshot.paramMap.get('id');

    console.log(this.centroDeProceso, this.embarcacion, this.dia)
  }
}
