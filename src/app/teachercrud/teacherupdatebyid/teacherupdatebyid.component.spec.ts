import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherupdatebyidComponent } from './teacherupdatebyid.component';

describe('TeacherupdatebyidComponent', () => {
  let component: TeacherupdatebyidComponent;
  let fixture: ComponentFixture<TeacherupdatebyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherupdatebyidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherupdatebyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
