import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooldeleteComponent } from './schooldelete.component';

describe('SchooldeleteComponent', () => {
  let component: SchooldeleteComponent;
  let fixture: ComponentFixture<SchooldeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchooldeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooldeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
