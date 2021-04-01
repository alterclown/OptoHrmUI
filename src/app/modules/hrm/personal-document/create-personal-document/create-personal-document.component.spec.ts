import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePersonalDocumentComponent } from './create-personal-document.component';

describe('CreatePersonalDocumentComponent', () => {
  let component: CreatePersonalDocumentComponent;
  let fixture: ComponentFixture<CreatePersonalDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePersonalDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePersonalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
