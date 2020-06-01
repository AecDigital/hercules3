import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaRiesgosComponent } from './consulta-riesgos.component';

describe('ConsultaRiesgosComponent', () => {
  let component: ConsultaRiesgosComponent;
  let fixture: ComponentFixture<ConsultaRiesgosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaRiesgosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaRiesgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
