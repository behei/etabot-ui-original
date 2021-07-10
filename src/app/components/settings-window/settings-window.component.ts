import { Component, OnInit, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Project } from '../../project';

@Component({
  selector: 'app-settings-window',
  templateUrl: './settings-window.component.html',
  styleUrls: ['./settings-window.component.css']
})
export class SettingsWindowComponent implements OnInit {
  tms: any;
  project_obj: Project;
  tms_service: any;
  confirmDelete: boolean;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    console.log(this.data);
    this.tms = this.data['tms'];
    this.project_obj = this.data['project'];
    this.tms_service = this.data['tms_service'];
    console.log('settings window inited.');
    console.log("THIS.DATA: ", this.data);
  }

  removeProject() {
    let updatedProjects = this.tms.params.projects_user_selected.filter(project => project != this.project_obj.name);
    this.tms_service.patch_imported_projects(this.tms.id, this.tms.params, updatedProjects)
      .subscribe(
        success => {
          console.log(`Successfully removed prroject ${this.project_obj.name}`);
          this.tms_service.parse_projects(this.tms.id)
            .subscribe(
              success => {
                console.log(`Succesfully parsed projects with TMS ID: ${this.tms.id}`)
              },
              error => {
                console.log(`Failed to parse projects with TMS ID: ${this.tms.id}: ${error}`)
              }
            );
        },
        error => {
          console.log(`Error removing project ${this.project_obj.name}: ${error}`);
        }
      );
  }
}
