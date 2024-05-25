import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadesProgramadasComponent } from './actividades-programadas.component';

describe('ActividadesProgramadasComponent', () => {
  let component: ActividadesProgramadasComponent;
  let fixture: ComponentFixture<ActividadesProgramadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActividadesProgramadasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActividadesProgramadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
