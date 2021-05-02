import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetProctorComponent } from './set-proctor.component';

describe('SetProctorComponent', () => {
  let component: SetProctorComponent;
  let fixture: ComponentFixture<SetProctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetProctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetProctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
