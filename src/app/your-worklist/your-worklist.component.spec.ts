import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourWorklistComponent } from './your-worklist.component';

describe('YourWorklistComponent', () => {
  let component: YourWorklistComponent;
  let fixture: ComponentFixture<YourWorklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourWorklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourWorklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
