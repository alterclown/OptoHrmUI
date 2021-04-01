import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainingSetupComponent } from './update-training-setup.component';

describe('UpdateTrainingSetupComponent', () => {
  let component: UpdateTrainingSetupComponent;
  let fixture: ComponentFixture<UpdateTrainingSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTrainingSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTrainingSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
