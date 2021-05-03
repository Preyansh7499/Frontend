import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalMarksUpdateComponent } from './final-marks-update.component';

describe('FinalMarksUpdateComponent', () => {
  let component: FinalMarksUpdateComponent;
  let fixture: ComponentFixture<FinalMarksUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalMarksUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalMarksUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
