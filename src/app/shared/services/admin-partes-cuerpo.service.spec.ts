import { TestBed } from '@angular/core/testing';
import { ServiceAdminPartesCuerpoService } from './admin-partes-cuerpo.service';



describe('ServiceAdminPartesCuerpoService', () => {
  let service: ServiceAdminPartesCuerpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceAdminPartesCuerpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
