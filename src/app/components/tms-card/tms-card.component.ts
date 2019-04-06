import { Component, OnInit, Input } from '@angular/core';
import { JiraService } from '../../services/jira.service';
import { Router, ActivatedRoute} from '@angular/router';
// import { EtabotApiService } from '../../services/etabot-api.service';

@Component({
  selector: 'app-tms-card',
  templateUrl: './tms-card.component.html',
  styleUrls: ['./tms-card.component.css']
})

export class TmsCardComponent implements OnInit {
  @Input() tms: any;
  updating_tms: boolean;
  new_password: string;
  error_message: string;
  error: boolean;

  constructor(
      private jiraService: JiraService,
      private router: Router
      // private etabotAPI: EtabotApiService
    ) {
    this.updating_tms = false;
    this.error = false;
  }

  ngOnInit() {
    console.log('TmsCardComponent Init tms: ' + this.tms + this.tms.id + JSON.stringify(this.tms));
  }

  remove_protocol_from_string(url) {
      return url.replace(/(^\w+:|^)\/\//, '');
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


  parse_projects(tms_id) {
      // console.log('updating tms id ' + tms_id + ' with new password: ' + this.new_password);
    this.updating_tms = true;
    this.jiraService.parse_projects(tms_id)
    .subscribe(
      success => {
        this.updating_tms = false;
        this.error = false;
      },
      error => {
        this.error_message = error;
        if (String(error.status) === '400') {
            if (error._body.includes('Unauthorized (401)')) {
                this.error_message = 'Error: Unauthorized 401';
            } else {
                this.error_message = 'Bad request (4xx) - please relogin and  \
                    try again. If the issue persists, please report the issue to \
                    hello@etabot.ai';
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
            console.log('redirecting to /tmss');
            this.router.navigate(['/projects']);
            // this.etabotAPI.get_real_projects();
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


}
