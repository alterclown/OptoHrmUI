import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTrainingSetupComponent } from './create-training-setup.component';

describe('CreateTrainingSetupComponent', () => {
  let component: CreateTrainingSetupComponent;
  let fixture: ComponentFixture<CreateTrainingSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTrainingSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTrainingSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
