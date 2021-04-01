import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOverTimeRequestComponent } from './update-over-time-request.component';

describe('UpdateOverTimeRequestComponent', () => {
  let component: UpdateOverTimeRequestComponent;
  let fixture: ComponentFixture<UpdateOverTimeRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOverTimeRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOverTimeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
