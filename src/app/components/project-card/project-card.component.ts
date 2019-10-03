import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SettingsWindowComponent } from '../settings-window/settings-window.component';
import { EtabotApiService } from '../../services/etabot-api.service';
import { Project } from '../../project';

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

    console.log('initing Project Card with project: ' + this.project.name + ' tms id: ' + this.tms.id);
    console.log('ngOnInit update_backlog=' + this.update_backlog);
    this.project_obj = new Project(this.project);
    if (this.project_obj.velocity_available) {
        this.update_eta_tooltip = 'Submit job to update ETAs';
    } else {
        this.update_eta_tooltip = 'Need to accumulate velocity data before making ETA predictions.';
    }
    // console.log(this.project_obj.get_scope_field_name());
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


  estimate(project) {
      // this.etabotAPI.estimate('16', '51')

      project['eta_in_progress'] = true;
      this.project.include_active_sprints = this.update_active_sprints;
      this.project.include_future_sprints = this.update_future_sprints;
      this.project.include_backlog = this.update_backlog;
      this.etabotAPI.estimate(project);

  }

  get_connectivity_status() {
    // console.log('parsing "' + this.tms.connectivity_status + "'");
    // console.log(typeof(this.tms.connectivity_status));
    // console.log('"'+this.tms.connectivity_status+'"')
    // const cs = JSON.parse(this.tms.connectivity_status);
    // console.log(cs)
    return this.tms.connectivity_status;
  }

}
