import { Component, OnInit, Input } from '@angular/core';
import { JiraService } from '../../services/jira.service';
import { Router, ActivatedRoute} from '@angular/router';
import { ErrorBoxComponent } from '../error-box/error-box.component';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';
import { MatTableDataSource } from '@angular/material/table';

// import { Job } from '../../job';
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
  message: string;
  projects: Array<{name: string, import: boolean}>
  displayColumns: Array<string>;
  dataSource: MatTableDataSource<Object>;

  constructor(
      private jiraService: JiraService,
      private router: Router,
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

    if (this.tms.params.projects_available) {
      this.projects = this.tms.params.projects_available.map(project => { return {name: project, import: false} });
    }

    this.displayColumns = ['projects'];
    this.dataSource = new MatTableDataSource(this.projects);
  }

  remove_protocol_from_string(url) {
      return url.replace(/(^\w+:|^)\/\//, '');
  }

  username_not_null() {
      if (this.tms.username) {
          return true;
      } else {
          return false;
      }
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

    let projects_to_parse = this.projects.filter(project => { return project.import }).map(project => { return project.name });

    console.log("Parsing projects:", projects_to_parse);

    this.updating_tms = true;
    this.jiraService.parse_projects(tms_id, projects_to_parse)
    .subscribe(
      parse_result => {

        console.log(parse_result);
        console.log(typeof(parse_result));
        for (const job of parse_result) {
            console.log(job);
        }

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

  select_all_projects(select) {
    this.projects.forEach(project => {
      project.import = select;
    });
  }
  
  update_selected_projects(project) {
    project.import = !project.import;
  }

  applyFilter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
