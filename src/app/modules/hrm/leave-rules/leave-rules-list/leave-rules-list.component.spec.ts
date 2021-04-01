import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRulesListComponent } from './leave-rules-list.component';

describe('LeaveRulesListComponent', () => {
  let component: LeaveRulesListComponent;
  let fixture: ComponentFixture<LeaveRulesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveRulesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveRulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
