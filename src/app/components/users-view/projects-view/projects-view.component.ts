import { Component, OnInit, Input, Directive } from '@angular/core';
import { EtabotApiService } from '../../../services/etabot-api.service';
import { AuthService } from '../../../services/auth-service.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { isEmpty } from '../../../tools';

import { JiraService } from '../../../services/jira.service';
import { ProjectCardComponent } from '../../project-card/project-card.component';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})

export class ProjectsViewComponent implements OnInit {
  // projects : any;
  realProjects: any;
  showAdvancedSetting: boolean;
  isSession: any;
  gotProjects = false;
  keys: any;
  projectsReceived = false;
  timeZone: string;
  tmss_by_id: any;
  loading: boolean;
  public defaultTimeZone: string;
  username: string;
  c_isEmpty = isEmpty;
  local_etabotAPI: EtabotApiService;
  error_message: string;
  error_occurred: boolean;
  projects_to_show_report = new Set();

  // isLoggedInStatus = false;
  // panelOpenState = false;
  constructor(
    private etabotAPI: EtabotApiService,
    private tms_service: JiraService,
    private authService: AuthService,
    private http: Http,
    private titleService: Title) {
    this.defaultTimeZone = 'GMT +7';
    this.showAdvancedSetting = false;
    this.tmss_by_id = {};
    this.local_etabotAPI = etabotAPI;
    this.error_occurred = false;

    tms_service.get_tms().subscribe(
        tms_count => console.log(tms_count),
        error => this.projectsError(error));
    tms_service.tmss.subscribe(
        data => this.setTmss(data),
        error => this.projectsError(error));
  }

  setTmss(tms_data) {
      console.log('saving TMS data');

      Object.entries(tms_data).forEach(
          ([key, tms]) => {
              console.log(tms);
              this.tmss_by_id[tms['id']] = tms;
          });

      this.getProjects();

  }


  getProjects(callback?: CallableFunction) {
    console.log('getting projects data');
    this.local_etabotAPI.get_real_projects();
    this.local_etabotAPI.projects.subscribe(
        data => {
            this.setProjects(data);
            if (callback) {
                console.log('getProjects callback starting');
                console.log(callback);
                callback();
                console.log('getProjects callback finished');
            }
        },
        error => this.projectsError(error));
  }

  update_project(project_name) {
      console.log('update_project called with: ' + project_name);
      this.projects_to_show_report.add(project_name);
      this.getProjects();
      console.log('this.projects_to_show_report:');
      console.log(this.projects_to_show_report);
  }

  projectsError(error) {
      console.log('error in getting projects: ' + error);
      this.error_message = 'Something went wrong while getting your projects. Please try again later.';
      this.projectsReceived = true;
      this.error_occurred = true;

  }

  setProjects(data) {
    console.log('setProjects started.');
    this.realProjects = data;
    this.projectsReceived = true;
    console.log('setProjects finished.');
  }


  ngOnInit() {
    this.titleService.setTitle('Your projects');
    this.username = localStorage.getItem('username');
    this.username = this.username.substr(0, this.username.indexOf('@'));
  }

  setTimeZone(receivedTimeZone) {
    this.timeZone = receivedTimeZone;
  }

  estimate_all_projects() {
    console.log('updating all projects: ' + typeof(this.realProjects) + this.realProjects);
    Object.entries(this.realProjects).forEach(
        ([key, project]) => {
            project['eta_in_progress'] = true;
            this.etabotAPI.estimate(project).subscribe(
                jobs => {
                    for (const job of jobs) {
                        job.callback = () => {
                            project['eta_in_progress'] = false;
                        };
                    }
                });
        });
  }

}



