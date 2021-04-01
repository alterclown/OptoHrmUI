import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePersonalDocumentComponent } from './update-personal-document.component';

describe('UpdatePersonalDocumentComponent', () => {
  let component: UpdatePersonalDocumentComponent;
  let fixture: ComponentFixture<UpdatePersonalDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePersonalDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePersonalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
