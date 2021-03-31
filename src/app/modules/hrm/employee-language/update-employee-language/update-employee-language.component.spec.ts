import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmployeeLanguageComponent } from './update-employee-language.component';

describe('UpdateEmployeeLanguageComponent', () => {
  let component: UpdateEmployeeLanguageComponent;
  let fixture: ComponentFixture<UpdateEmployeeLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmployeeLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmployeeLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
