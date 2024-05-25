import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, AvatarModule, DialogModule, TableModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Update',
        icon: 'pi pi-refresh'
      },
      {
        label: 'Delete',
        icon: 'pi pi-times'
      }
    ];
  }

  Plataformas = [
    {
      id: '1000',
      code: 'DBCBD5E-AI-S/TAG',
      name: 'OBRA',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'APAPCH',
      quantity: 5,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'DBBSEEST-P-FA-3105',
      name: 'MANTO TERRESTRE',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'APLT',
      quantity: 5,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
    {
      id: '1000',
      code: 'DBECO3-GAS-CS-301B',
      name: 'INGENIERIA',
      description: 'Product Description',
      image: 'bamboo-watch.jpg',
      price: 65,
      category: 'APLT-TMDB',
      quantity: 3,
      inventoryStatus: 'INSTOCK',
      rating: 5
    },
  ];
}
