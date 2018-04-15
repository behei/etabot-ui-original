import { Component } from '@angular/core';
import { TermsConditionsFullComponent } from '../register-page/terms-conditions-full/terms-conditions-full.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-jira-credentials',
  templateUrl: './jira-credentials.component.html',
  styleUrls: ['./jira-credentials.component.css']
})

export class JiraCredentialsComponent {
	username: string;
	team: string;
  constructor(public dialog: MatDialog) {
    this.team = ".atlassian.net";
  	if(localStorage.getItem('username'))
  		this.username = localStorage.getItem('username');
  }


  openDialog(): void {
    let dialogRef = this.dialog.open(TermsConditionsFullComponent, {
      width: '800px',
      height: '500px',
    });
  }

}
