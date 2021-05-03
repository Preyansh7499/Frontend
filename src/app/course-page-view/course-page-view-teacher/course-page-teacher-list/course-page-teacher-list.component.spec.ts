import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageTeacherListComponent } from './course-page-teacher-list.component';

describe('CoursePageTeacherListComponent', () => {
  let component: CoursePageTeacherListComponent;
  let fixture: ComponentFixture<CoursePageTeacherListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursePageTeacherListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageTeacherListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
