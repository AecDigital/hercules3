import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hercules3MenuComponent } from './hercules3-menu.component';

describe('Hercules3MenuComponent', () => {
  let component: Hercules3MenuComponent;
  let fixture: ComponentFixture<Hercules3MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hercules3MenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hercules3MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
