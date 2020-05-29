import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCategEpiDialogComponent } from './delete-categ-epi-dialog.component';

describe('DeleteCategEpiDialogComponent', () => {
  let component: DeleteCategEpiDialogComponent;
  let fixture: ComponentFixture<DeleteCategEpiDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCategEpiDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCategEpiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
