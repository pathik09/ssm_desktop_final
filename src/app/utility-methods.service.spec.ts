import { TestBed } from '@angular/core/testing';

import { UtilityMethodsService } from './utility-methods.service';

describe('UtilityMethodsService', () => {
  let service: UtilityMethodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityMethodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
