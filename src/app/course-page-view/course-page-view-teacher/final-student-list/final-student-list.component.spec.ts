import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalStudentListComponent } from './final-student-list.component';

describe('FinalStudentListComponent', () => {
  let component: FinalStudentListComponent;
  let fixture: ComponentFixture<FinalStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
