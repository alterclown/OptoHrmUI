import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWeekListComponent } from './work-week-list.component';

describe('WorkWeekListComponent', () => {
  let component: WorkWeekListComponent;
  let fixture: ComponentFixture<WorkWeekListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkWeekListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWeekListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
