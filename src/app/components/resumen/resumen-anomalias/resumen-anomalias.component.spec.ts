import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenAnomaliasComponent } from './resumen-anomalias.component';

describe('ResumenAnomaliasComponent', () => {
  let component: ResumenAnomaliasComponent;
  let fixture: ComponentFixture<ResumenAnomaliasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenAnomaliasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenAnomaliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
