import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooladdComponent } from './schooladd.component';

describe('SchooladdComponent', () => {
  let component: SchooladdComponent;
  let fixture: ComponentFixture<SchooladdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchooladdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooladdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
