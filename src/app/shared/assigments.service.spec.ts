import { TestBed } from '@angular/core/testing';

import { AssignmentsService } from './assigments.service'

describe('AssigmentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignmentsService = TestBed.get(AssignmentsService);
    expect(service).toBeTruthy();
  });
});
