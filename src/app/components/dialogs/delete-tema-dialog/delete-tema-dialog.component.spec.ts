import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTemaDialogComponent } from './delete-tema-dialog.component';

describe('DeleteTemaDialogComponent', () => {
  let component: DeleteTemaDialogComponent;
  let fixture: ComponentFixture<DeleteTemaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTemaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTemaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
