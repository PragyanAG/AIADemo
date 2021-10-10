import { TestBed } from '@angular/core/testing';

import { RoutingtableService } from './routingtable.service';

describe('RoutingtableService', () => {
  let service: RoutingtableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutingtableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
