import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsMonitorComponent } from './jobs-monitor.component';

describe('JobsMonitorComponent', () => {
  let component: JobsMonitorComponent;
  let fixture: ComponentFixture<JobsMonitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsMonitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
