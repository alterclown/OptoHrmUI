import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeeLanguageComponent } from './create-employee-language.component';

describe('CreateEmployeeLanguageComponent', () => {
  let component: CreateEmployeeLanguageComponent;
  let fixture: ComponentFixture<CreateEmployeeLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmployeeLanguageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
