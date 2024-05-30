import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenHallazgosComponent } from './resumen-hallazgos.component';

describe('ResumenHallazgosComponent', () => {
  let component: ResumenHallazgosComponent;
  let fixture: ComponentFixture<ResumenHallazgosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenHallazgosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenHallazgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
