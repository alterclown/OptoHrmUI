import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverTimeRequestComponent } from './over-time-request.component';

describe('OverTimeRequestComponent', () => {
  let component: OverTimeRequestComponent;
  let fixture: ComponentFixture<OverTimeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverTimeRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverTimeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
