import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalUpdatesComponent } from './portal-updates.component';

describe('PortalUpdatesComponent', () => {
  let component: PortalUpdatesComponent;
  let fixture: ComponentFixture<PortalUpdatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalUpdatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalUpdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
