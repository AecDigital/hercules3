import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hercules3SidebarComponent } from './hercules3-sidebar.component';

describe('Hercules3SidebarComponent', () => {
  let component: Hercules3SidebarComponent;
  let fixture: ComponentFixture<Hercules3SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hercules3SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hercules3SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
