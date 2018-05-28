import { Component, OnInit } from '@angular/core';
import { EtabotApiService } from '../../services/etabot-api.service';
import { AuthService } from '../../services/auth-service.service';
import { JiraService } from '../../services/jira.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';

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
              console.log('redirecting to projects')
              this.router.navigate([this.returnUrl]);
            },
            error => {
              this.router.navigate(['/projects'])
            }
          );
        },
        error => {
          console.log("error");
          this.loading = false;
        }
      );
      
  }


}
