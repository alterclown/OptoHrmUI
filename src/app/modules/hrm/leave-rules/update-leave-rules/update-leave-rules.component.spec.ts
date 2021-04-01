import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLeaveRulesComponent } from './update-leave-rules.component';

describe('UpdateLeaveRulesComponent', () => {
  let component: UpdateLeaveRulesComponent;
  let fixture: ComponentFixture<UpdateLeaveRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLeaveRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLeaveRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
