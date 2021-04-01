import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDocumentListComponent } from './personal-document-list.component';

describe('PersonalDocumentListComponent', () => {
  let component: PersonalDocumentListComponent;
  let fixture: ComponentFixture<PersonalDocumentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalDocumentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
