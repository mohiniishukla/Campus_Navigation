import { TestBed } from '@angular/core/testing';

import { CollegeInfoService } from './college-info.service';

describe('CollegeInfoService', () => {
  let service: CollegeInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
