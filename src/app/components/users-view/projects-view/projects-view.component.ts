import { Component, OnInit, Input, Directive } from '@angular/core';
import { EtabotApiService } from '../../../services/etabot-api.service'
// import { MatDialog } from '@angular/material';
import { AuthService } from '../../../services/auth-service.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

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
    private http: Http) {
    this.defaultTimeZone = "GMT +7";
    //this.projects = etabotAPI.get_fake_projects();
    //this.realProjects = etabotAPI.get_real_projects();
    //console.log("REAL PROJECTS" + this.realProjects);
    this.showAdvancedSetting = false;
    this.etabotAPI.get_real_projects();
    etabotAPI.projects.subscribe(data => this.setProjects(data));
    etabotAPI.projects.subscribe(change => this.setGotProjects());
        //etabotAPI.projects.subscribe(response => this.setUpProjects(response));
    //authService.getLoggedIn.subscribe(response => this.changeLogInStatus());
  }
  //token: string;
  setProjects(data) {
    this.realProjects = data;
    //console.log(Object.keys(this.realProjects));
    console.log(this.realProjects);
  }

  setGotProjects() {
    this.projectsReceived = true;
  }

  ngOnInit() {

  }

  setTimeZone(receivedTimeZone) {
    this.timeZone = receivedTimeZone;
    console.log('time zone in settimezone' + this.timeZone);
  }

  private changeLogInStatus() {
    console.log("changing login status in project view...");
  }

}



