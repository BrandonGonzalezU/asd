import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportesDiariosComponent } from './reportes-diarios.component';

describe('ReportesDiariosComponent', () => {
  let component: ReportesDiariosComponent;
  let fixture: ComponentFixture<ReportesDiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportesDiariosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportesDiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
