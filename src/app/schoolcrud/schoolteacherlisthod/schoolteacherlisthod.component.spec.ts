import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolteacherlisthodComponent } from './schoolteacherlisthod.component';

describe('SchoolteacherlisthodComponent', () => {
  let component: SchoolteacherlisthodComponent;
  let fixture: ComponentFixture<SchoolteacherlisthodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolteacherlisthodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolteacherlisthodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
