import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnomaliasTablesComponent } from './anomalias-tables.component';

describe('AnomaliasTablesComponent', () => {
  let component: AnomaliasTablesComponent;
  let fixture: ComponentFixture<AnomaliasTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnomaliasTablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnomaliasTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
