import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SettingsWindowComponent } from '../settings-window/settings-window.component';
import { ReportComponent } from '../report/report.component';
import { EtabotApiService } from '../../services/etabot-api.service';
import { Project } from '../../project';
import { Job } from '../../job';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {
  @Input() project: any;
  @Input() tms: any;
  @Input() tms_service: any;
  project_obj: Project;
  update_eta_tooltip: string;
  project_jobs_ids = [];
  update_button_disabled = true;

  update_active_sprints: true;
  update_future_sprints: true;
  update_backlog: false;

  constructor(
    public dialog: MatDialog,
    private etabotAPI: EtabotApiService
    ) {
      console.log('constructor update_backlog=' + this.update_backlog);
  }

  ngOnInit() {
    this.update_active_sprints = true;
    this.update_future_sprints = true;
    this.update_backlog = false;

    console.log('initing Project Card with project: ');
    console.log(this.project);
    console.log('tms:');
    console.log(this.tms);
    console.log('ngOnInit update_backlog=' + this.update_backlog);
    this.project_obj = new Project(this.project);
    this.try_enable_update_button();
  }


  openSettings(tms, project): void {
    const dialogRef = this.dialog.open(SettingsWindowComponent, {
      width: '800px',
      height: '500px',
      data: {
        tms: tms,
        project: project,
        tms_service: this.tms_service
      }
    });
  }


  try_enable_update_button() {
    console.log('try_enable_update_button');
    if (this.project_obj.velocity_available) {
        this.update_eta_tooltip = 'Submit job to update ETAs';
        this.update_button_disabled = false;
    } else {
        this.update_eta_tooltip = 'Need to accumulate velocity data before making ETA predictions.';
        this.update_button_disabled = true;
    }
  }

  estimate(project) {
      project['eta_in_progress'] = true;
      this.project.include_active_sprints = this.update_active_sprints;
      this.project.include_future_sprints = this.update_future_sprints;
      this.project.include_backlog = this.update_backlog;
      this.etabotAPI.estimate(project).subscribe(
                jobs => {
                    console.log('estimate job submission successful');
                    console.log(jobs);
                    for (const job of jobs) {
                        this.project_jobs_ids.push(job.get_id());
                        job.callback = () => {
                            console.log('project callback called for job ' + job.get_id());

                            const index = this.project_jobs_ids.indexOf(job.get_id(), 0);
                            if (index > -1) {
                               this.project_jobs_ids.splice(index, 1);
                            }
                            if (this.project_jobs_ids.length === 0) {
                                project['eta_in_progress'] = false;
                                project['result_message'] = 'Done!';
                                this.try_enable_update_button();
                                this.show_report();
                            }
                        };
                    }
                    project['error_message'] = null;
                    project['last_updated'] = Date.now();
                    project['result_message'] = 'ETAs update started!';
                    this.update_button_disabled = true;
                    this.update_eta_tooltip = 'Updating ETAs is already in progress. Wait for completion, or change the options.';
                },
                error => {
                    console.log('estimate job submission error' + error);
                    project['error_message'] = error;
                    this.try_enable_update_button();
                    project['result_message'] = 'Error occured: ' + error;
                }
            );
  }

  get_connectivity_status() {
    // console.log('parsing "' + this.tms.connectivity_status + "'");
    // console.log(typeof(this.tms.connectivity_status));
    // console.log('"'+this.tms.connectivity_status+'"')
    // const cs = JSON.parse(this.tms.connectivity_status);
    // console.log(cs)
    return this.tms.connectivity_status;
  }

  show_report(): void {
    const dialogRef = this.dialog.open(
        ReportComponent,
            {
              width: '800px',
              height: '500px',
              data: {
                  'html_report': this.project_obj.get_html_report()
              }
            });
  }

}
