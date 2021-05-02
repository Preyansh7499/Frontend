import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingEnrollComponent } from './teaching-enroll.component';

describe('TeachingEnrollComponent', () => {
  let component: TeachingEnrollComponent;
  let fixture: ComponentFixture<TeachingEnrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachingEnrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachingEnrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
