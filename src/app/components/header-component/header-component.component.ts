import { Component, OnInit, NgModule } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
import { SignUpService } from '../../services/sign-up.service';
import { EtabotApiService } from '../../services/etabot-api.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})




export class HeaderComponentComponent implements OnInit {
  isLoggedIn = false;
  loggedOut = false;
  constructor(
      private dialog: MatDialog,
      private signUpService: SignUpService,
      private logInService: AuthService,
      private router: Router,
    ) {
    logInService.getLoggedIn.subscribe(response => this.changeLogInStatus());
    //signUpService.getRegisteredStatus.subscribe(response => this.changeLogInStatus());
  }

  ngOnInit() {
    if (localStorage.getItem('username'))
      this.isLoggedIn = true;
  }

  redirectHomePage() {
    this.router.navigate(['./']);
  }
  private changeLogInStatus() {
    console.log("changing the login status...");
    this.isLoggedIn = !this.isLoggedIn;
  }



  logout() {
    console.log("logging out...");
    this.logInService.logout();
    //window.location.href = "https://etabot.ai";
  }


 


}
