import { TestBed } from '@angular/core/testing';

import { MandarplatosService } from './mandarplatos.service';

describe('MandarplatosService', () => {
  let service: MandarplatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MandarplatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
