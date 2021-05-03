import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageViewStudentComponent } from './course-page-view-student.component';

describe('CoursePageViewStudentComponent', () => {
  let component: CoursePageViewStudentComponent;
  let fixture: ComponentFixture<CoursePageViewStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursePageViewStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
