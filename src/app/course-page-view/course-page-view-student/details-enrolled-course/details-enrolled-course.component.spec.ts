import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEnrolledCourseComponent } from './details-enrolled-course.component';

describe('DetailsEnrolledCourseComponent', () => {
  let component: DetailsEnrolledCourseComponent;
  let fixture: ComponentFixture<DetailsEnrolledCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEnrolledCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEnrolledCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
