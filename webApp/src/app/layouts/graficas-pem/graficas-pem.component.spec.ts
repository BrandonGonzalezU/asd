import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasPEMComponent } from './graficas-pem.component';

describe('GraficasPEMComponent', () => {
  let component: GraficasPEMComponent;
  let fixture: ComponentFixture<GraficasPEMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficasPEMComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficasPEMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
