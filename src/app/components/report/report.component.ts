import { Component, Inject, OnInit, Input } from '@angular/core';
// import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute} from '@angular/router';
import { EtabotApiService } from '../../services/etabot-api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
      @Input() project_id: number;
      local_etabotAPI: EtabotApiService;
      error_message = 'Something went wrong';
      error_occurred = false;
      projects_received = false;
      project: any;
      report_html: string;
  constructor(
        private route: ActivatedRoute,
        private etabotAPI: EtabotApiService,
    // public dialogRef: MatDialogRef<ReportComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any

    ) {
    this.local_etabotAPI = etabotAPI;
    console.log('getting projects data');
    this.local_etabotAPI.get_real_projects();
    this.local_etabotAPI.projects.subscribe(
        data => {
          Object.entries(data).forEach(
              ([key, p]) => {
                  console.log(p);
                  const pid_str = this.project_id.toString();
                  console.log('checking project_id = ' + pid_str + typeof(pid_str));
                  const pid_str2 = p['id'].toString();
                  if (pid_str === pid_str2) {
                      this.project = p;
                      console.log('found project with desired project_id');
                      this.report_html = p['project_settings']['report'].slice(624);
                  } else {
                      console.log('not desired project_id = ' + pid_str2 + typeof(pid_str2));
                  }
              });

        },
        error => this.projectsError(error));
  }

  projectsError(error) {
      console.log('error in getting projects: ' + error);
      this.error_message = 'Something went wrong while getting your projects. Please try again later.';
      this.projects_received = true;
      this.error_occurred = true;

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.project_id = params['project_id'];
        console.log('params[project_id]: ' + this.project_id);

    });


  }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
