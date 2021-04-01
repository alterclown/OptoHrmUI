import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOverTimeRequestComponent } from './create-over-time-request.component';

describe('CreateOverTimeRequestComponent', () => {
  let component: CreateOverTimeRequestComponent;
  let fixture: ComponentFixture<CreateOverTimeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOverTimeRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOverTimeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
