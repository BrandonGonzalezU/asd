import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEmbarcacionesComponent } from './dashboard-embarcaciones.component';

describe('DashboardEmbarcacionesComponent', () => {
  let component: DashboardEmbarcacionesComponent;
  let fixture: ComponentFixture<DashboardEmbarcacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardEmbarcacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardEmbarcacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
