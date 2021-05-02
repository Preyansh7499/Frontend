import { TestBed } from '@angular/core/testing';

import { StudentIdStorageService } from './student-id-storage.service';

describe('StudentIdStorageService', () => {
  let service: StudentIdStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentIdStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
