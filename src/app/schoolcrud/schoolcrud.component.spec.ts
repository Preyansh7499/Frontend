import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcrudComponent } from './schoolcrud.component';

describe('SchoolcrudComponent', () => {
  let component: SchoolcrudComponent;
  let fixture: ComponentFixture<SchoolcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolcrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
