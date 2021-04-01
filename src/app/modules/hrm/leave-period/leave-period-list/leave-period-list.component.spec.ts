import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavePeriodListComponent } from './leave-period-list.component';

describe('LeavePeriodListComponent', () => {
  let component: LeavePeriodListComponent;
  let fixture: ComponentFixture<LeavePeriodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavePeriodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavePeriodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
