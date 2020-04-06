import { TestBed } from '@angular/core/testing';

import { JobsServiceService } from './jobs-service.service';

describe('JobsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobsServiceService = TestBed.get(JobsServiceService);
    expect(service).toBeTruthy();
  });
});
