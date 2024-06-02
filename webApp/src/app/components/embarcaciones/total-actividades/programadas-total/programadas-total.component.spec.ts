import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramadasTotalComponent } from './programadas-total.component';

describe('ProgramadasTotalComponent', () => {
  let component: ProgramadasTotalComponent;
  let fixture: ComponentFixture<ProgramadasTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramadasTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramadasTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
