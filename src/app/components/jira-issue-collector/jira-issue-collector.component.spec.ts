import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraIssueCollectorComponent } from './jira-issue-collector.component';

describe('JiraIssueCollectorComponent', () => {
  let component: JiraIssueCollectorComponent;
  let fixture: ComponentFixture<JiraIssueCollectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraIssueCollectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraIssueCollectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
