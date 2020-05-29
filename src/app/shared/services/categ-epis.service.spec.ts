import { TestBed } from '@angular/core/testing';

import { CategEpisService } from './categ-epis.service';

describe('CategEpisService', () => {
  let service: CategEpisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategEpisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
