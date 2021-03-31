import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmploymentStatusComponent } from './create-employment-status.component';

describe('CreateEmploymentStatusComponent', () => {
  let component: CreateEmploymentStatusComponent;
  let fixture: ComponentFixture<CreateEmploymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmploymentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmploymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
