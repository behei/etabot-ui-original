import { Component, OnInit } from '@angular/core';
import { EtabotApiService } from '../../../../services/etabot-api.service'
import { AuthService } from '../../../../services/auth-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { SignUpService } from '../../../../services/sign-up.service';

@Component({
  selector: 'app-verification-activate',
  templateUrl: './verification-activate.component.html',
  styleUrls: ['./verification-activate.component.css']
})

export class VerificationActivateComponent implements OnInit {
  token: string;
  message: string;
  constructor(private titleService: Title,
              private signupService: SignUpService,
              private etabotAPI: EtabotApiService,
              private router: Router,
              private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.titleService.setTitle('ETAbot Verification Processed Notification');
    this.route.params.subscribe(params => {
        this.token = params['token'];
    });
    this.signupService.activate(this.token);
    this.signupService.verificationResponse.subscribe(res => this.setMessage(res));
  }

  setMessage(data) {
    this.message = data["message"];
  }
}
