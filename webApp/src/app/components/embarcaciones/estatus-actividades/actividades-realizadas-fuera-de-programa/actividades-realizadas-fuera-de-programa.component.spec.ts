import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesRealizadasFueraDeProgramaComponent } from './actividades-realizadas-fuera-de-programa.component';

describe('ActividadesRealizadasFueraDeProgramaComponent', () => {
  let component: ActividadesRealizadasFueraDeProgramaComponent;
  let fixture: ComponentFixture<ActividadesRealizadasFueraDeProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesRealizadasFueraDeProgramaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActividadesRealizadasFueraDeProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
