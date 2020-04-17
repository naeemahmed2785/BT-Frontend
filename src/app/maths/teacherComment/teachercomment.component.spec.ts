import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachercommentComponent } from './teachercomment.component';

describe('TeachercommentComponent', () => {
  let component: TeachercommentComponent;
  let fixture: ComponentFixture<TeachercommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachercommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachercommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
