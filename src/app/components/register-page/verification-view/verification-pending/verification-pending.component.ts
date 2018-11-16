import { Component, OnInit } from '@angular/core';
import { EtabotApiService } from '../../../../services/etabot-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-verification-pending',
  templateUrl: './verification-pending.component.html',
  styleUrls: ['./verification-pending.component.css']
})

export class VerificationPendingComponent implements OnInit {
  email: string;
  constructor(private titleService: Title) {
   }

  ngOnInit() {
    this.titleService.setTitle('ETAbot Verification Pending Page');
    this.email = localStorage.getItem('email');
  }
}

