import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroCommentComponent } from './retro-comment.component';

describe('RetroCommentComponent', () => {
  let component: RetroCommentComponent;
  let fixture: ComponentFixture<RetroCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
