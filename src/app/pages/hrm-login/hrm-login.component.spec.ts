import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmLoginComponent } from './hrm-login.component';

describe('HrmLoginComponent', () => {
  let component: HrmLoginComponent;
  let fixture: ComponentFixture<HrmLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrmLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
