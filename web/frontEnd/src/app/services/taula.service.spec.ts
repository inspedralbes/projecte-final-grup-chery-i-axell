import { TestBed } from '@angular/core/testing';

import { TaulaService } from './taula.service';

describe('TaulaService', () => {
  let service: TaulaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaulaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
