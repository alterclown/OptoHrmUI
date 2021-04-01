import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSetupListComponent } from './training-setup-list.component';

describe('TrainingSetupListComponent', () => {
  let component: TrainingSetupListComponent;
  let fixture: ComponentFixture<TrainingSetupListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainingSetupListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSetupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
