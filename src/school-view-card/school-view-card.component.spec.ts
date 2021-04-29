import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolViewCardComponent } from './school-view-card.component';

describe('SchoolViewCardComponent', () => {
  let component: SchoolViewCardComponent;
  let fixture: ComponentFixture<SchoolViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolViewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
