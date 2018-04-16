import { Component, OnInit } from '@angular/core';
import { TermsConditionsFullComponent } from '../register-page/terms-conditions-full/terms-conditions-full.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-jira-credentials',
  templateUrl: './jira-credentials.component.html',
  styleUrls: ['./jira-credentials.component.css']
})

export class JiraCredentialsComponent implements OnInit{
	username: string;
	team: string;
  constructor(public dialog: MatDialog, private titleService: Title) {
    this.team = ".atlassian.net";
  	if(localStorage.getItem('username'))
  		this.username = localStorage.getItem('username');
  }

  ngOnInit() {
    this.titleService.setTitle('ETAbot JIRA Credentials');
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(TermsConditionsFullComponent, {
      width: '800px',
      height: '500px',
    });
  }

}
