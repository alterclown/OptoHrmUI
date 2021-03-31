import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaygradeComponent } from './paygrade.component';

describe('PaygradeComponent', () => {
  let component: PaygradeComponent;
  let fixture: ComponentFixture<PaygradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaygradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaygradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
