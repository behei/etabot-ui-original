import { Component, OnInit } from '@angular/core';
import { EtabotApiService } from '../../services/etabot-api.service';
import { AuthService } from '../../services/auth-service.service';
import { JiraService } from '../../services/jira.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { sha512 } from 'js-sha512';

declare let pendo: any;

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
    this.titleService.setTitle('ETAbot Log In');
    if (localStorage.getItem('newUser') === 'true') {
        this.newUser = true;
        localStorage.removeItem('newUser');
    }

    const loggedInUser = JSON.parse(localStorage.getItem('currentUser'));

    if (loggedInUser == null) {
      console.log('user has not logged in yet');
    } else {
        console.log('current user, logging in automatically..');
        this.router.navigate(['/projects']);
      }
  }

  login() {
    this.loading = true;
    console.log('logging in...');

    this.authService.login(this.model.username, this.model.password)
      .subscribe(
        success => {
            const username_hash = sha512(this.model.username);
          console.log('login success', this.model.username, username_hash);
          console.log(username_hash);

        pendo.initialize({
                visitor: {
                    id: username_hash,
                },
                account: {
                    id: 'ACCOUNT-UNIQUE-ID-test'
                }
            });
          this.jiraService.get_tms()
            .subscribe(
              (tms_count: number) => {
                console.log('tms_count: ' + tms_count);
                if (tms_count > 0) {
                    console.log('redirecting to projects');
                    this.router.navigate(['/projects']);
                } else {
                    console.log('redirecting to tms_connect');
                    this.router.navigate(['/tms_connect']);
                }
              },
              error => {
                console.log('get_tms() error occurred ');
                this.router.navigate(['/error_page']);
              }
            );
          },
        error => {
          console.log(error + '; \n' + error._body);
          this.error_message = 'Something went wrong, sorry about that. Please try again a bit later.\
           If the issue persists, please let us know at hello@etabot.ai';
          if (error._body != null ) {
              try {
                  const error_dict = JSON.parse(error._body);
                  if (error_dict.hasOwnProperty('non_field_errors')) {
                      this.error_message = error_dict['non_field_errors'].join(', ');
                  }
               } catch (e) {
                   console.log('could not parse error body: ' + e);
               }
          }
          this.loading = false;
        }
      );
  }


}
