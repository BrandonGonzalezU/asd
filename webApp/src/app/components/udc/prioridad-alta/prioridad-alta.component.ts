import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';


@Component({
  selector: 'app-prioridad-alta',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, HeaderComponent, SidebarComponent],
  templateUrl: './prioridad-alta.component.html',
  styleUrl: './prioridad-alta.component.css'
})
export class PrioridadAltaComponent {
  visibleTerminadas: boolean = false;
  visibleCanceladas: boolean = false;
  visibleSinRecurso: boolean = false;

  constructor(private router: Router) {

  }


  Terminadas() {
    this.visibleTerminadas = true;
  }
  Canceladas() {
    this.visibleCanceladas = true;
  }
  sinRecurso() {
    this.visibleSinRecurso = true;
  }
  goToUDC() {
    console.log('Anomalias Informacion');
    this.router.navigate(['/anomalias-informacion']);
  }


}
