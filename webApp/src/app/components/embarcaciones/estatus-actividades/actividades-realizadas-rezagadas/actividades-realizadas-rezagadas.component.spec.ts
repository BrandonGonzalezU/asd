import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesRealizadasRezagadasComponent } from './actividades-realizadas-rezagadas.component';

describe('ActividadesRealizadasRezagadasComponent', () => {
  let component: ActividadesRealizadasRezagadasComponent;
  let fixture: ComponentFixture<ActividadesRealizadasRezagadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesRealizadasRezagadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActividadesRealizadasRezagadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
