import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartesCuerpoComponent } from './admin-partes-cuerpo.component';

describe('AdminPartesCuerpoComponent', () => {
  let component: AdminPartesCuerpoComponent;
  let fixture: ComponentFixture<AdminPartesCuerpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPartesCuerpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPartesCuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
