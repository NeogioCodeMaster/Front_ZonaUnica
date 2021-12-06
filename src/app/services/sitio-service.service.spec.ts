import { TestBed } from '@angular/core/testing';

import { SitioServiceService } from './sitio-service.service';

describe('SitioServiceService', () => {
  let service: SitioServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SitioServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
