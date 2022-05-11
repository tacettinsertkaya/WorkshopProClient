import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroSubjectComponent } from './retro-subject.component';

describe('RetroSubjectComponent', () => {
  let component: RetroSubjectComponent;
  let fixture: ComponentFixture<RetroSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
