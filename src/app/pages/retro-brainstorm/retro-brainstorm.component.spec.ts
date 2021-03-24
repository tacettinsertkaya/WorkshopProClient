import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroBrainstormComponent } from './retro-brainstorm.component';

describe('RetroBrainstormComponent', () => {
  let component: RetroBrainstormComponent;
  let fixture: ComponentFixture<RetroBrainstormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroBrainstormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroBrainstormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
