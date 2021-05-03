import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageViewTeacherComponent } from './course-page-view-teacher.component';

describe('CoursePageViewTeacherComponent', () => {
  let component: CoursePageViewTeacherComponent;
  let fixture: ComponentFixture<CoursePageViewTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursePageViewTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageViewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
