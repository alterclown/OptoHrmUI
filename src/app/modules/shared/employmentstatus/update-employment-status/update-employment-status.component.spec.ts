import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmploymentStatusComponent } from './update-employment-status.component';

describe('UpdateEmploymentStatusComponent', () => {
  let component: UpdateEmploymentStatusComponent;
  let fixture: ComponentFixture<UpdateEmploymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmploymentStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmploymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
