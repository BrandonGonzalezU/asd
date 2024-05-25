import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezagadasTotalComponent } from './rezagadas-total.component';

describe('RezagadasTotalComponent', () => {
  let component: RezagadasTotalComponent;
  let fixture: ComponentFixture<RezagadasTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RezagadasTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RezagadasTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
