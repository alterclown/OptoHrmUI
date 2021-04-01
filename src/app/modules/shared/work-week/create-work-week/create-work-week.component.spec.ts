import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkWeekComponent } from './create-work-week.component';

describe('CreateWorkWeekComponent', () => {
  let component: CreateWorkWeekComponent;
  let fixture: ComponentFixture<CreateWorkWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWorkWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
