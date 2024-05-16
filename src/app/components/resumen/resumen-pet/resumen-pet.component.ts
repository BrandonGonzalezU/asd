import { Component } from '@angular/core';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { HeaderComponent } from '../../../layouts/header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resumen-pet',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './resumen-pet.component.html',
  styleUrl: './resumen-pet.component.css'
})
export class ResumenPetComponent {

  constructor(private router: Router) {

  }
  goToUdcPrioridadAlta() {
    console.log('Prioridad Alta');
    this.router.navigate(['/udc-prioridad-alta']);
  }
}
