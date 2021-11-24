import { TestBed } from '@angular/core/testing';

import { DomiciliariosService } from './domiciliarios.service';

describe('DomiciliariosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomiciliariosService = TestBed.get(DomiciliariosService);
    expect(service).toBeTruthy();
  });
});
