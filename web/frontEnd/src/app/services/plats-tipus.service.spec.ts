import { TestBed } from '@angular/core/testing';

import { PlatsTipusService } from './plats-tipus.service';

describe('PlatsTipusService', () => {
  let service: PlatsTipusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatsTipusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
