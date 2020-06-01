import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { H3FilterBoxComponent } from './h3-filter-box.component';

describe('H3FilterBoxComponent', () => {
  let component: H3FilterBoxComponent;
  let fixture: ComponentFixture<H3FilterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ H3FilterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(H3FilterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
