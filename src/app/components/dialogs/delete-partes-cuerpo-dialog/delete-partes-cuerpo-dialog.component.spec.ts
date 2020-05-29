import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePartesCuerpoDialogComponent } from './delete-partes-cuerpo-dialog.component';

describe('DeletePartesCuerpoDialogComponent', () => {
  let component: DeletePartesCuerpoDialogComponent;
  let fixture: ComponentFixture<DeletePartesCuerpoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePartesCuerpoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePartesCuerpoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
