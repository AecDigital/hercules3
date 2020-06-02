import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H3SearchTreeDialogComponent } from './h3-search-tree-dialog.component';

describe('H3SearchTreeDialogComponent', () => {
  let component: H3SearchTreeDialogComponent;
  let fixture: ComponentFixture<H3SearchTreeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H3SearchTreeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H3SearchTreeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
