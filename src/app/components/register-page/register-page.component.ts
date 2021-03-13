import { Component, AfterViewInit, OnInit, Inject } from '@angular/core';
import { EtabotApiService } from '../../services/etabot-api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgForm } from '@angular/forms';
import { SignUpService } from '../../services/sign-up.service';
import { JiraService } from '../../services/jira.service';
import { throwError } from 'rxjs';
import { Router, ActivatedRoute} from '@angular/router';
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
    isNotGDRPCountry: boolean;
    userFailure: boolean;
    model: any = {};
    returnUrl = '';
    error_message = '';
    token = 137;
    constructor(
        private etabotAPI: EtabotApiService,
        private router: Router,
        private signUpService: SignUpService,
        private jiraService: JiraService,
        private dialog: MatDialog,
        private route: ActivatedRoute,
        private titleService: Title) {
        this.isAcceptedTerms = true;
        this.passwordMatched = false;
        this.userFailure = false;
        this.isNotGDRPCountry = true;
    }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.token = params['token'];
        console.log('params[token]: ' + params['token']);
        // try {
        //     const int_token = Number(this.token);
        //     if (int_token % 188748146801 !== 0) {
        //         this.router.navigate(['/need_sign_up_token']);
        //     }
        // } catch (e) {
        //     this.router.navigate(['/need_sign_up_token']);
        // }
    });

    this.returnUrl = '/verification/pending';
    // if (localStorage.getItem('username')) {
    //   this.router.navigate([this.returnUrl]);
    // }
    this.titleService.setTitle('ETAbot Sign Up');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(
        TermsConditionsFullComponent,
            {
              width: '800px',
              height: '500px',
            });
  }

  signup() {
    this.signUpService.signup(this.model.email, this.model.email, this.model.password)
    .subscribe(
      success => {
        console.log('signup success! redirecting...');
        this.router.navigate([this.returnUrl]);
      },
      error => {
        console.log('signup error');
        this.error_message = error + '; \n' + error._body;
        this.userFailure = true;
      }
    );
  }
}

