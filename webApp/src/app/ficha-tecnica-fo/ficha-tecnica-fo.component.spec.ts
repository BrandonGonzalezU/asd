import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaTecnicaFOComponent } from './ficha-tecnica-fo.component';

describe('FichaTecnicaFOComponent', () => {
  let component: FichaTecnicaFOComponent;
  let fixture: ComponentFixture<FichaTecnicaFOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FichaTecnicaFOComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FichaTecnicaFOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
