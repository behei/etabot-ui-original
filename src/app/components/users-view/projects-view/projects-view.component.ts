import { Component, OnInit, Input, Directive } from '@angular/core';
import { EtabotApiService } from '../../../services/etabot-api.service'
import { AuthService } from '../../../services/auth-service.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects-view',
  templateUrl: './projects-view.component.html',
  styleUrls: ['./projects-view.component.css']
})

export class ProjectsViewComponent implements OnInit {
  //projects : any;
  realProjects: any;
  showAdvancedSetting: boolean;
  isSession: any;
  gotProjects = false;
  keys: any;
  projectsReceived: boolean;
  timeZone: string;
  public defaultTimeZone: string;
  //isLoggedInStatus = false;
  constructor(
    private etabotAPI: EtabotApiService,
    private authService: AuthService,
    private http: Http,
    private titleService: Title) {
    this.defaultTimeZone = "GMT +7";
    this.showAdvancedSetting = false;
    this.etabotAPI.get_real_projects();
    etabotAPI.projects.subscribe(data => this.setProjects(data));
    etabotAPI.projects.subscribe(change => this.setGotProjects());
  }
  //token: string;
  setProjects(data) {
    this.realProjects = data;
  }

  setGotProjects() {
    this.projectsReceived = true;
  }

  ngOnInit() {
    this.titleService.setTitle('Your JIRA Projects');
  }

  setTimeZone(receivedTimeZone) {
    this.timeZone = receivedTimeZone;
  }

}



