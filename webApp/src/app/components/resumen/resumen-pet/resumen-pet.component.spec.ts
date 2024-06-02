import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenPetComponent } from './resumen-pet.component';

describe('ResumenPetComponent', () => {
  let component: ResumenPetComponent;
  let fixture: ComponentFixture<ResumenPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenPetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumenPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
