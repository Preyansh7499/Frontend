import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageViewComponent } from './course-page-view.component';

describe('CoursePageViewComponent', () => {
  let component: CoursePageViewComponent;
  let fixture: ComponentFixture<CoursePageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursePageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
