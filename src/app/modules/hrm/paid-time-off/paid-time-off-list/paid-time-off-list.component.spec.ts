import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidTimeOffListComponent } from './paid-time-off-list.component';

describe('PaidTimeOffListComponent', () => {
  let component: PaidTimeOffListComponent;
  let fixture: ComponentFixture<PaidTimeOffListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaidTimeOffListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidTimeOffListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
