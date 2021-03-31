import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaygradeListComponent } from './paygrade-list.component';

describe('PaygradeListComponent', () => {
  let component: PaygradeListComponent;
  let fixture: ComponentFixture<PaygradeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaygradeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaygradeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
