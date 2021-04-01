import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeaveRulesComponent } from './create-leave-rules.component';

describe('CreateLeaveRulesComponent', () => {
  let component: CreateLeaveRulesComponent;
  let fixture: ComponentFixture<CreateLeaveRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLeaveRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLeaveRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
