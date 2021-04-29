import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewCardComponent } from './teacher-view-card.component';

describe('TeacherViewCardComponent', () => {
  let component: TeacherViewCardComponent;
  let fixture: ComponentFixture<TeacherViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherViewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
