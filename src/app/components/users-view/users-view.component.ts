import { Component, OnInit } from '@angular/core';
import { EtabotApiService } from '../../services/etabot-api.service';
import { AuthService } from '../../services/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';

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
    private authService: AuthService) {
   }


  

  ngOnInit() {
    this.returnUrl = '/jira';
  }

  login() {
    this.loading = true;
    console.log('logging in...');
    
    this.authService.login(this.model.username, this.model.password)
      .subscribe(
        success => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log("error");
          this.loading = false;
        }
      );
      
  }


}
