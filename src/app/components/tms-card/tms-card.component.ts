import { Component, OnInit, Input } from '@angular/core';
import { JiraService } from '../../services/jira.service';
import { Router, ActivatedRoute} from '@angular/router';
import { ErrorBoxComponent } from '../error-box/error-box.component';
// import { EtabotApiService } from '../../services/etabot-api.service';

@Component({
  selector: 'app-tms-card',
  templateUrl: './tms-card.component.html',
  styleUrls: ['./tms-card.component.css']
})

export class TmsCardComponent implements OnInit {
  @Input() tms: any;
  @Input() tms_service: any;
  updating_tms: boolean;
  new_password: string;
  new_username: string;
  error_message: string;
  error: boolean;
  tms_status: any;

  constructor(
      private jiraService: JiraService,
      private router: Router
      // private etabotAPI: EtabotApiService
    ) {
    this.updating_tms = false;
    this.error = false;
  }

  ngOnInit() {
    console.log('TmsCardComponent Init tms: ' + this.tms.id + this.tms.connectivity_status + this.tms);
    if (this.tms.connectivity_status !== null) {
          this.tms_status = this.tms.connectivity_status;
      } else {
          this.tms_status = {'status': 'unknown', 'descrtiption': ''};
      }
  }

  remove_protocol_from_string(url) {
      return url.replace(/(^\w+:|^)\/\//, '');
  }



  update_password(tms_id) {
      // console.log('updating tms id ' + tms_id + ' with new password: ' + this.new_password);
    this.updating_tms = true;
    this.jiraService.patch_username_password_tms(tms_id, this.new_username, this.new_password)
    .subscribe(
      success => {
          console.log('update password is successful');
        this.updating_tms = false;
        this.error = false;
        if (this.tms_service) {
            this.tms_service.get_tms();
        }

      },
      error => {
        this.error_message = this.jiraService.parse_error(error);
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
        this.error_message = this.jiraService.parse_error(error);
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
            this.error_message = this.jiraService.parse_error(error);
            console.log(error);
            this.error = true;
            this.updating_tms = false;

          }
        );
    }
  }


}
