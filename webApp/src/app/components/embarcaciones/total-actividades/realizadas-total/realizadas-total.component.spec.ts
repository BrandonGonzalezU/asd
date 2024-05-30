import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizadasTotalComponent } from './realizadas-total.component';

describe('RealizadasTotalComponent', () => {
  let component: RealizadasTotalComponent;
  let fixture: ComponentFixture<RealizadasTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealizadasTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealizadasTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
