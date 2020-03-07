import { Component, OnInit } from '@angular/core';
import { JiraService } from '../../services/jira.service';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tms-connect',
  templateUrl: './tms-connect.component.html',
  styleUrls: ['./tms-connect.component.css']
})
export class TmsConnectComponent implements OnInit {
  redirect_url: String;
  breakpoint: Number;

  constructor(
      @Inject(DOCUMENT) private document: Document,
      private jiraService: JiraService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 4;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 4;
  }

  setRedirectUrl(res) {
      console.log('res');
      console.log(typeof(res));
      console.log(res);
      this.redirect_url = res['redirect_url'];
      console.log('set this.redirect_url: ' + this.redirect_url);
      console.log('type of this.redirect_url' + typeof(this.redirect_url));
      this.document.location.href = String(this.redirect_url);
  }


  link_tms(tms_name: string) {
      console.log('linking to ' + tms_name);
      this.jiraService.link_tms(tms_name).subscribe(
      success => {
        // this.router.navigate(['/projects']);
        console.log('success');

      },
      error => {
        console.log('error');
      }
      );
      this.jiraService.oauth_url.subscribe(res => this.setRedirectUrl(res));
  }
}
