import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroFinishComponent } from './retro-finish.component';

describe('RetroFinishComponent', () => {
  let component: RetroFinishComponent;
  let fixture: ComponentFixture<RetroFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
