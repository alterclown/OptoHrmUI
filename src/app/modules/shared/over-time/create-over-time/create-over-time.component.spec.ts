import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOverTimeComponent } from './create-over-time.component';

describe('CreateOverTimeComponent', () => {
  let component: CreateOverTimeComponent;
  let fixture: ComponentFixture<CreateOverTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOverTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOverTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
