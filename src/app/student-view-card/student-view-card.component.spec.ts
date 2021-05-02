import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewCardComponent } from './student-view-card.component';

describe('StudentViewCardComponent', () => {
  let component: StudentViewCardComponent;
  let fixture: ComponentFixture<StudentViewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
