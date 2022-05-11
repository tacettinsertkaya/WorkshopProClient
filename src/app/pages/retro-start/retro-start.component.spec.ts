import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroStartComponent } from './retro-start.component';

describe('RetroStartComponent', () => {
  let component: RetroStartComponent;
  let fixture: ComponentFixture<RetroStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
