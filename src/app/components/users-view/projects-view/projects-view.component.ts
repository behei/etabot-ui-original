import { Component, OnInit, Input, Directive } from '@angular/core';
import { EtabotApiService } from '../../../services/etabot-api.service';
import { AuthService } from '../../../services/auth-service.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Title } from '@angular/platform-browser';


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
  projectsReceived: boolean;
  timeZone: string;
  tmss_by_id: any;
  loading: boolean;
  public defaultTimeZone: string;
  username: string;


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
    this.etabotAPI.get_real_projects();
    etabotAPI.projects.subscribe(data => this.setProjects(data));
    etabotAPI.projects.subscribe(change => this.setGotProjects());

    tms_service.get_tms().subscribe();
    tms_service.tmss.subscribe(data => this.setTmss(data));

  }

  setTmss(data) {
      console.log('saving TMS data');

      Object.entries(data).forEach(
          ([key, tms]) => {
              console.log(tms);
              this.tmss_by_id[tms['id']] = tms;
          });
  }

  setProjects(data) {
    this.realProjects = data;
  }

  setGotProjects() {
    this.projectsReceived = true;
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
        ([key, value]) => {
            value['eta_in_progress'] = true;
            this.etabotAPI.estimate(value);
        });
  }

}



