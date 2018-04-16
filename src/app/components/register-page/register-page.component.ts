import { Component, AfterViewInit, OnInit, Inject } from '@angular/core';
import { EtabotApiService } from '../../services/etabot-api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { TermsConditionsFullComponent } from './terms-conditions-full/terms-conditions-full.component';
import { Title } from '@angular/platform-browser';

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
    public dialog: MatDialog,
    private titleService: Title) 
  {
    this.isAcceptedTerms = false;
    this.passwordMatched = false;
    this.userFailure = false;
  }



  ngOnInit() {
    this.returnUrl = '/jira';
    if (localStorage.getItem('username')) {
      this.router.navigate([this.returnUrl]);
    }
    this.titleService.setTitle("ETAbot Sign Up");
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(TermsConditionsFullComponent, {
      width: '800px',
      height: '500px',
    });
  }

  signup() {
    this.signUpService.signup(this.model.username, this.model.email, this.model.password)
    .subscribe(
      success => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.userFailure = true;
      }
    );
  }

}

