import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFormCriteriaComponent } from './new-form-criteria.component';

describe('NewFormCriteriaComponent', () => {
  let component: NewFormCriteriaComponent;
  let fixture: ComponentFixture<NewFormCriteriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewFormCriteriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFormCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
