import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H3SearchDialogComponent } from './h3-search-dialog.component';

describe('H3SearchDialogComponent', () => {
  let component: H3SearchDialogComponent;
  let fixture: ComponentFixture<H3SearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H3SearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H3SearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
