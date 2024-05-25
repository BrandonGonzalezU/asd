import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioridadAltaComponent } from './prioridad-alta.component';

describe('PrioridadAltaComponent', () => {
  let component: PrioridadAltaComponent;
  let fixture: ComponentFixture<PrioridadAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrioridadAltaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrioridadAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
