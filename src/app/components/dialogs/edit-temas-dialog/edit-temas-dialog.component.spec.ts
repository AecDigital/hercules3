import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTemasDialogComponent } from './edit-temas-dialog.component';

describe('EditTemasDialogComponent', () => {
  let component: EditTemasDialogComponent;
  let fixture: ComponentFixture<EditTemasDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTemasDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTemasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
