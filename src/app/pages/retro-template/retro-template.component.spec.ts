import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroTemplateComponent } from './retro-template.component';

describe('RetroTemplateComponent', () => {
  let component: RetroTemplateComponent;
  let fixture: ComponentFixture<RetroTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
