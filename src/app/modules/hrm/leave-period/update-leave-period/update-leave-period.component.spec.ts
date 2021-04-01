import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeavePeriodComponent } from './update-leave-period.component';

describe('UpdateLeavePeriodComponent', () => {
  let component: UpdateLeavePeriodComponent;
  let fixture: ComponentFixture<UpdateLeavePeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLeavePeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeavePeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
