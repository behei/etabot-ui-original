import { Component, OnInit } from '@angular/core';
import { TermsConditionsFullComponent } from '../register-page/terms-conditions-full/terms-conditions-full.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { JiraService } from '../../services/jira.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jira-credentials',
  templateUrl: './jira-credentials.component.html',
  styleUrls: ['./jira-credentials.component.css']
})

export class JiraCredentialsComponent implements OnInit {
  model: any = {};
  username: string;
  team: string;
  type: 'JIRA';
  error: boolean;
  loading: boolean;
  error_message: string;
  constructor(
    public dialog: MatDialog,
    private titleService: Title,
    private jiraService: JiraService,
    private router: Router) {
    if (localStorage.getItem('username')) {
          this.username = localStorage.getItem('username');
      }
  }

  ngOnInit() {
    this.titleService.setTitle('JIRA Credentials');
    this.error = false;
    this.loading = false;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TermsConditionsFullComponent, {
      width: '800px',
      height: '500px',
    });
  }

  add_tms_via_service() {
    this.loading = true;
    this.error = false;
    this.jiraService.add_tms(
        this.username,
        this.model.jira_url,
        this.model.email,
        this.model.password)
    .subscribe(
      tms_json => {
        this.loading = false;
        console.log('add_tms_via_service success: ');
        console.log(tms_json);
        const tms_id = tms_json['id'];
        this.router.navigate(
            ['/tmss'],
            { queryParams: { 'new_tms_ids': tms_id }});
      },
      error => {
        this.loading = false;
        this.error = true;
        this.error_message = this.jiraService.parse_error(error);
      }
    );
  }
}
