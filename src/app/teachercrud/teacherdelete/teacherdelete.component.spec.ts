import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherdeleteComponent } from './teacherdelete.component';

describe('TeacherdeleteComponent', () => {
  let component: TeacherdeleteComponent;
  let fixture: ComponentFixture<TeacherdeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherdeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
