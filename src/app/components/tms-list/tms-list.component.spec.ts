import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsListComponent } from './tms-list.component';
import {JiraService} from '../../services/jira.service';
import {of} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {JobsServiceService} from '../../services/jobs-service.service';
import {MatDialog} from '@angular/material';

fdescribe('TmsListComponent', () => {
  let component: TmsListComponent;
  let fixture: ComponentFixture<TmsListComponent>;
  let mockJiraService;
  beforeEach(async(() => {
    const mocktmssData = {};
    const mockJobServiceService = {};
    const mockRouter = {};
    const mockMatDialog = {};
    const mockActivatedRoute = {
      queryParams: of({test: 'test'})
    };
    mockJiraService = {
      get_tms: jasmine.createSpy('get_tms').and.returnValue(of(1)),
      tmss: of(mocktmssData)
    };
    TestBed.configureTestingModule({
      declarations: [ TmsListComponent ],
      providers: [
        {provide: JiraService, value: mockJiraService},
        {provide: ActivatedRoute, value: mockActivatedRoute},
        {provide: JobsServiceService, value: mockJobServiceService},
        {provide: Router, value: mockRouter},
        {provide: MatDialog, value: mockMatDialog}
      ]
    })
      .overrideTemplate(TmsListComponent, '')
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('setTmss', () => {

  });
});
