import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelitesEnlaceComponent } from './satelites-enlace.component';

describe('SatelitesEnlaceComponent', () => {
  let component: SatelitesEnlaceComponent;
  let fixture: ComponentFixture<SatelitesEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatelitesEnlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SatelitesEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
