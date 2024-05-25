import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FueraDeProgramaTotalComponent } from './fuera-de-programa-total.component';

describe('FueraDeProgramaTotalComponent', () => {
  let component: FueraDeProgramaTotalComponent;
  let fixture: ComponentFixture<FueraDeProgramaTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FueraDeProgramaTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FueraDeProgramaTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
