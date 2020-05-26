import { TestBed } from '@angular/core/testing';

import { AdminTemasService } from './admin-temas.service';

describe('AdminTemasService', () => {
  let service: AdminTemasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminTemasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
