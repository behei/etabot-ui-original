import { Component, OnInit, Input, Directive } from '@angular/core';
import { EtabotApiService } from '../../../services/etabot-api.service';
import { AuthService } from '../../../services/auth-service.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { JiraService } from '../../../services/jira.service';


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
  new_password: string;
  error_message: string;
  error: boolean;
  loading: boolean;
  public defaultTimeZone: string;
  updating_tms: boolean;
  // isLoggedInStatus = false;
  // panelOpenState = false;
  constructor(
    private etabotAPI: EtabotApiService,
    private authService: AuthService,
    private http: Http,
    private jiraService: JiraService,
    private titleService: Title) {
    this.defaultTimeZone = 'GMT +7';
    this.showAdvancedSetting = false;
    this.updating_tms = false;
    this.error = false;
    this.etabotAPI.get_real_projects();
    etabotAPI.projects.subscribe(data => this.setProjects(data));
    etabotAPI.projects.subscribe(change => this.setGotProjects());
  }
  // token: string;
  setProjects(data) {
    this.realProjects = data;
  }

  setGotProjects() {
    this.projectsReceived = true;
  }

  ngOnInit() {
    this.titleService.setTitle('Your projects');
  }

  setTimeZone(receivedTimeZone) {
    this.timeZone = receivedTimeZone;
  }

  update_password(tms_id) {
      // console.log('updating tms id ' + tms_id + ' with new password: ' + this.new_password);
    this.updating_tms = true;
    this.jiraService.patch_password_tms(tms_id, this.new_password)
    .subscribe(
      success => {
        this.updating_tms = false;
        this.error = false;
      },
      error => {
        this.error_message = error;
        if (String(error.status) === '400') {
            if (error._body.includes('Unauthorized (401)')) {
                this.error_message = 'Wrong combination of username/email and password. Please correct and try again.';
            } else {
                if (error._body.includes('already exists for this user')) {
                    this.error_message = 'This username and team name already exist in your account. \
Please enter another one or edit your existing one in projects screen.';
                } else {
                    this.error_message = 'Bad request (4xx) - please check\
                        all inputs and try again. If the issue persists, please report the issue to \
                        hello@etabot.ai';
                }
            }
        }
        console.log(error);
        this.error = true;
        this.updating_tms = false;
      }
    );
  }

  delete_tms(tms_id) {
      // console.log('updating tms id ' + tms_id + ' with new password: ' + this.new_password);
    if (confirm('Are you sure you want to remove this JIRA account and its projects from ETAbot? You can add it again later.')) {
        this.updating_tms = true;
        this.jiraService.delete_tms(tms_id)
        .subscribe(
          success => {
            this.updating_tms = false;
            this.error = false;
            this.etabotAPI.get_real_projects();
          },
          error => {
            this.error_message = error;
            if (String(error.status) === '400') {
                if (error._body.includes('Unauthorized (401)')) {
                    this.error_message = 'Wrong combination of username/email and password. Please correct and try again.';
                } else {
                    if (error._body.includes('already exists for this user')) {
                        this.error_message = 'This username and team name already exist in your account. \
    Please enter another one or edit your existing one in projects screen.';
                    } else {
                        this.error_message = 'Bad request (4xx) - please check\
                            all inputs and try again. If the issue persists, please report the issue to \
                            hello@etabot.ai';
                    }
                }
            }
            console.log(error);
            this.error = true;
            this.updating_tms = false;
          }
        );
    }
  }



  estimate(project) {
      // this.etabotAPI.estimate('16', '51')
      if (project == null) {
          console.log('updating all projects: ' + typeof(this.realProjects) + this.realProjects);
          Object.entries(this.realProjects).forEach(
              ([key, value]) => {
                  value['eta_in_progress'] = true;
                  this.etabotAPI.estimate(value);
              });
      } else {
          project['eta_in_progress'] = true;
          this.etabotAPI.estimate(project);
      }
  }

}



