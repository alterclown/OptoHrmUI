import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaidTimeOffComponent } from './update-paid-time-off.component';

describe('UpdatePaidTimeOffComponent', () => {
  let component: UpdatePaidTimeOffComponent;
  let fixture: ComponentFixture<UpdatePaidTimeOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaidTimeOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaidTimeOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
