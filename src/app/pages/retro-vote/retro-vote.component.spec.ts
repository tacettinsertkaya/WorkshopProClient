import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroVoteComponent } from './retro-vote.component';

describe('RetroVoteComponent', () => {
  let component: RetroVoteComponent;
  let fixture: ComponentFixture<RetroVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
