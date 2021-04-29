import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeViewCardComponent } from './degree-view-card.component';

describe('DegreeViewCardComponent', () => {
  let component: DegreeViewCardComponent;
  let fixture: ComponentFixture<DegreeViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreeViewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreeViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
