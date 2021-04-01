import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateWorkWeekComponent } from './update-work-week.component';

describe('UpdateWorkWeekComponent', () => {
  let component: UpdateWorkWeekComponent;
  let fixture: ComponentFixture<UpdateWorkWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateWorkWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateWorkWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
