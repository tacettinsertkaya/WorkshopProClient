import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectHeaderComponent } from './subject-header.component';

describe('SubjectHeaderComponent', () => {
  let component: SubjectHeaderComponent;
  let fixture: ComponentFixture<SubjectHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
