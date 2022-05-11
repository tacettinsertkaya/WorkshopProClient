import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroReportComponent } from './retro-report.component';

describe('RetroReportComponent', () => {
  let component: RetroReportComponent;
  let fixture: ComponentFixture<RetroReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
