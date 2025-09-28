import { TestBed } from '@angular/core/testing';

import { SnackStateService } from './snack-state';

describe('SnackStateService', () => {
  let service: SnackStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnackStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
