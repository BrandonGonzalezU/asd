import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UdcTablesComponent } from './udc-tables.component';

describe('UdcTablesComponent', () => {
  let component: UdcTablesComponent;
  let fixture: ComponentFixture<UdcTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UdcTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UdcTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
