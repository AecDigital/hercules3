import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategEpisComponent } from './categ-epis.component';

describe('CategEpisComponent', () => {
  let component: CategEpisComponent;
  let fixture: ComponentFixture<CategEpisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategEpisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategEpisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
