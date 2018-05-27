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

export class JiraCredentialsComponent implements OnInit{
  model: any = {};
	username: string;
	team: string;
  type: 'JIRA';
  constructor(
    public dialog: MatDialog, 
    private titleService: Title,
    private jiraService: JiraService,
    private router: Router) {
    this.team = ".atlassian.net";
  	if(localStorage.getItem('username'))
  		this.username = localStorage.getItem('username');
  }

  ngOnInit() {
    this.titleService.setTitle('JIRA Credentials');
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(TermsConditionsFullComponent, {
      width: '800px',
      height: '500px',
    });
  }

  jira() {
    this.jiraService.jira(this.username, this.model.jira_url, this.model.email, this.model.password)
    .subscribe(
      success => {
        this.router.navigate(['/projects'])
      },
      error => {
        console.log(error);
      }
      )
  }
     tms() {
    this.jiraService.get_tms()
    .subscribe(
      success => {

        //this.router.navigate([this.returnUrl]);
      },
      error => {
        //this.userFailure = true;
      }
    );
  }

 

}
