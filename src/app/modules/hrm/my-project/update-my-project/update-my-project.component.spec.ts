import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMyProjectComponent } from './update-my-project.component';

describe('UpdateMyProjectComponent', () => {
  let component: UpdateMyProjectComponent;
  let fixture: ComponentFixture<UpdateMyProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMyProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
