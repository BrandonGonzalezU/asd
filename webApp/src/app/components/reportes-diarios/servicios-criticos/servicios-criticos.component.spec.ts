import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosCriticosComponent } from './servicios-criticos.component';

describe('ServiciosCriticosComponent', () => {
  let component: ServiciosCriticosComponent;
  let fixture: ComponentFixture<ServiciosCriticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosCriticosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosCriticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
