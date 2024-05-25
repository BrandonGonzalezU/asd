import { Component, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from '../../../../layouts/sidebar/sidebar.component';
import { HeaderComponent } from '../../../../layouts/header/header.component';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-programadas-total',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, DialogModule],
  templateUrl: './programadas-total.component.html',
  styleUrl: './programadas-total.component.css'
})
export class ProgramadasTotalComponent {

  visibleSuspendidas: boolean = false;
  visibleCanceladas: boolean = false;
  visibleSinRecurso: boolean = false;
  visibleSinAvance: boolean = false;

  suspendidasMostrar() {
    this.visibleSuspendidas = true;
  }

  sinAvanceMostrar() {
    this.visibleSinAvance = true;
  }
}
