import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraCredentialsComponent } from './jira-credentials.component';

describe('JiraCredentialsComponent', () => {
  let component: JiraCredentialsComponent;
  let fixture: ComponentFixture<JiraCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JiraCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
