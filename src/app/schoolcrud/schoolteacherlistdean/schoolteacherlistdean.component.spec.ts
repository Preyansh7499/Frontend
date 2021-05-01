import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolteacherlistdeanComponent } from './schoolteacherlistdean.component';

describe('SchoolteacherlistdeanComponent', () => {
  let component: SchoolteacherlistdeanComponent;
  let fixture: ComponentFixture<SchoolteacherlistdeanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolteacherlistdeanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolteacherlistdeanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
