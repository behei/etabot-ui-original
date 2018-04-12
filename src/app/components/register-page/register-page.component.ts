import { Component, AfterViewInit, OnInit, Inject } from '@angular/core';
import { EtabotApiService } from '../../services/etabot-api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { TermsConditionsFullComponent } from './terms-conditions-full/terms-conditions-full.component';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
	newUser: any;
  isAcceptedTerms: boolean;
  passwordMatched: boolean;
  userFailure: boolean;
  model: any = {};
  returnUrl = '';
  constructor(
    private etabotAPI: EtabotApiService, 
    private router: Router, 
    private signUpService: SignUpService,  
    public dialog: MatDialog) 
  {
    this.isAcceptedTerms = false;
    this.passwordMatched = false;
    this.userFailure = false;
  }



  ngOnInit() {
    this.returnUrl = '/jira';
    if (localStorage.getItem('currentUser')) {
      this.router.navigate([this.returnUrl]);
    }
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(TermsConditionsFullComponent, {
      width: '800px',
      height: '500px',
      //data: { isAcceptedTerms: this.isAcceptedTerms}
    });

    //dialogRef.updatePosition({ top: '50px', left: '50px'});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.isAcceptevdTerms = result;
    });
  }

  signup() {
    this.signUpService.signup(this.model.username, this.model.email, this.model.password)
    .subscribe(
      success => {
        console.log("user successfully created");
        this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log("error");
        this.userFailure = true;
      }
    );
  }

}

