import { Component, OnInit } from '@angular/core';
import { EtabotApiService } from '../../services/etabot-api.service';
import { AuthService } from '../../services/auth-service.service';
import { JiraService } from '../../services/jira.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})

export class UsersViewComponent implements OnInit {
  loading: boolean;
  error = '';
  model: any = {};
  users: any;
  projects: any;
  returnUrl: string;
  newUser = false;
  error_message: string;
  constructor(
    private etabotAPI: EtabotApiService,
    private router: Router,
    private authService: AuthService,
    private titleService: Title,
    private jiraService: JiraService) {
   }

  ngOnInit() {
    this.returnUrl = '/jira';
    this.titleService.setTitle('ETAbot Log In');
    if (localStorage.getItem('newUser') === 'true') {
        this.newUser = true;
        localStorage.removeItem('newUser');
      }
  }

  login() {
    this.loading = true;
    console.log('logging in...');

    this.authService.login(this.model.username, this.model.password)
      .subscribe(
        success => {
          this.jiraService.get_tms()
            .subscribe(
              success => {
                console.log('redirecting to projects');
                this.router.navigate(['/projects']);
              },
              error => {
                console.log('get_tms() error occurred - redirecting to: ' + this.returnUrl);
                this.router.navigate([this.returnUrl]);
              }
            );
          },
        error => {
          this.error_message = error + '; \n' + error._body;
          console.log(this.error_message);
          this.error_message = "Unable to log in. Please verify your credentials are correct.";
          this.loading = false;
        }
      );
  }


}
