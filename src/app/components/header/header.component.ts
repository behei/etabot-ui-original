import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { SignUpService } from '../../services/sign-up.service';
import { EtabotApiService } from '../../services/etabot-api.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})




export class HeaderComponent implements OnInit {
  isLoggedIn: Boolean;
  loggedOut = false;
  username = '';
  constructor(
      private dialog: MatDialog,
      private signUpService: SignUpService,
      private logInService: AuthService,
      private router: Router,
    ) {
    logInService.getLoggedIn.subscribe(response => this.changeLogInStatus(response));
    // signUpService.getRegisteredStatus.subscribe(response => this.changeLogInStatus());
  }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.isLoggedIn = true;
      this.username = localStorage.getItem('username');
   } else {
       this.isLoggedIn = false;
   }
  }

  redirectHomePage() {
    this.router.navigate(['./']);
  }
  private changeLogInStatus(response) {
    console.log('changing the login status...');
    this.isLoggedIn = response;
  }



  logout() {
    console.log('logging out...');
    this.logInService.logout();
    console.log('log out successful');
    // window.location.href = "https://etabot.ai";
  }



}
