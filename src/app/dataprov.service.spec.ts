import { TestBed } from '@angular/core/testing';

import { DataprovService } from './dataprov.service';

describe('DataprovService', () => {
  let service: DataprovService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataprovService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
