import { TestBed } from '@angular/core/testing';

import { H3FilterBoxService } from './h3-filter-box.service';

describe('H3FilterBoxService', () => {
  let service: H3FilterBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(H3FilterBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
