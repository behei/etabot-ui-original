import { Component, OnInit } from '@angular/core';
import { TermsConditionsFullComponent } from '../register-page/terms-conditions-full/terms-conditions-full.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { JiraService } from '../../services/jira.service';
import { Router } from '@angular/router';
//import { }

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
  error_status: string;
  error_status_text: string;
  loading: boolean;
  error_message: string;
  attempts_to_connect: number;
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
    this.attempts_to_connect = 3;
    this.error_status_text = "Description temporary unavailable";
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
    //this.attempt_to_connect = this.attempt_to_connect + 1;
    this.jiraService.add_tms(
        this.username,
        this.model.jira_url,
        this.model.email,
        this.model.password)
    .subscribe(
      success => {
        this.loading = false;
        this.router.navigate(['/projects']);
      },
      error => {
        this.loading = false;
        this.error = true;
        this.error_message = this.jiraService.parse_error(error);
        
        // this type of parsing is needed because server always returns 
        // error 500 so there is no other way to differentiate
        // for now. 
        this.error_status = this.error_message.split(' ')[13];
        if (this.error_status == "404")
          this.error_status_text = "JIRA Page not found.";
        else if (this.error_status == "401")
          this.error_status_text = "JIRA e-mail or password incorrect.";
        else
          this.error_status_text = "Internal Server Error.";
        }
    );
  }
}
