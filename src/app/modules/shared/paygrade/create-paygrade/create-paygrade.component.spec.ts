import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePaygradeComponent } from './create-paygrade.component';

describe('CreatePaygradeComponent', () => {
  let component: CreatePaygradeComponent;
  let fixture: ComponentFixture<CreatePaygradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePaygradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePaygradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
