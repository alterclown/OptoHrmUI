import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeLanguageListComponent } from './employee-language-list.component';

describe('EmployeeLanguageListComponent', () => {
  let component: EmployeeLanguageListComponent;
  let fixture: ComponentFixture<EmployeeLanguageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeLanguageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeLanguageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
