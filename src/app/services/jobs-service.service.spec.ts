import { TestBed } from '@angular/core/testing';

import { JobsServiceService } from './jobs-service.service';

describe('JobsServiceService', () => {
  let service: JobsServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(JobsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});
