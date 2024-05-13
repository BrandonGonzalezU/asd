import { Component } from '@angular/core';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { HeaderComponent } from '../../../layouts/header/header.component';

@Component({
  selector: 'app-resumen-pet',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent],
  templateUrl: './resumen-pet.component.html',
  styleUrl: './resumen-pet.component.css'
})
export class ResumenPetComponent {

}
