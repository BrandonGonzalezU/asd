import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesRealizadasComponent } from './actividades-realizadas.component';

describe('ActividadesRealizadasComponent', () => {
  let component: ActividadesRealizadasComponent;
  let fixture: ComponentFixture<ActividadesRealizadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesRealizadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActividadesRealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
