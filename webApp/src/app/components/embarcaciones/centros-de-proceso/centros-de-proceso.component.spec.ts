import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrosDeProcesoComponent } from './centros-de-proceso.component';

describe('CentrosDeProcesoComponent', () => {
  let component: CentrosDeProcesoComponent;
  let fixture: ComponentFixture<CentrosDeProcesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CentrosDeProcesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CentrosDeProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
