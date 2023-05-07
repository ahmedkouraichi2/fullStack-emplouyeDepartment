import { TestBed } from '@angular/core/testing';

import { EmployeServicesService } from './employe-services.service';

describe('EmployeServicesService', () => {
  let service: EmployeServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
