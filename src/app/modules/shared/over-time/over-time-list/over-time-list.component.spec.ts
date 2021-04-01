import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverTimeListComponent } from './over-time-list.component';

describe('OverTimeListComponent', () => {
  let component: OverTimeListComponent;
  let fixture: ComponentFixture<OverTimeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverTimeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverTimeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
