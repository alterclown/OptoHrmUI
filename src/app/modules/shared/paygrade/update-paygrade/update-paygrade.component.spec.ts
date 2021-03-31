import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePaygradeComponent } from './update-paygrade.component';

describe('UpdatePaygradeComponent', () => {
  let component: UpdatePaygradeComponent;
  let fixture: ComponentFixture<UpdatePaygradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePaygradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePaygradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
