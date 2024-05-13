import { Component } from '@angular/core';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { HeaderComponent } from '../../../layouts/header/header.component';

@Component({
  selector: 'app-resumen-anomalias',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './resumen-anomalias.component.html',
  styleUrl: './resumen-anomalias.component.css'
})
export class ResumenAnomaliasComponent {

}
