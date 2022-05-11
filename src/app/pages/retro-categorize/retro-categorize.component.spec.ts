import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroCategorizeComponent } from './retro-categorize.component';

describe('RetroCategorizeComponent', () => {
  let component: RetroCategorizeComponent;
  let fixture: ComponentFixture<RetroCategorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroCategorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroCategorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
