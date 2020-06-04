import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerramientasHomeComponent } from './herramientas-home.component';

describe('HerramientasHomeComponent', () => {
  let component: HerramientasHomeComponent;
  let fixture: ComponentFixture<HerramientasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerramientasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerramientasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
