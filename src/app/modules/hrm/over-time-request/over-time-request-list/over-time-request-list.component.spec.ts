import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverTimeRequestListComponent } from './over-time-request-list.component';

describe('OverTimeRequestListComponent', () => {
  let component: OverTimeRequestListComponent;
  let fixture: ComponentFixture<OverTimeRequestListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverTimeRequestListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverTimeRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
