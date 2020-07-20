import { Component, OnInit } from '@angular/core';
import { JiraService } from '../../services/jira.service';
import { EtabotApiService } from '../../services/etabot-api.service';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface TMSoption {
  value: string;
  viewValue: string;
}

interface ConnectOption {
  value: string;
  text: string;
  info_text: string;
  checked: boolean;
}


@Component({
  selector: 'app-tms-connect',
  templateUrl: './tms-connect.component.html',
  styleUrls: ['./tms-connect.component.css']
})



export class TmsConnectComponent implements OnInit {
  redirect_url: String;
  breakpoint: Number;
  tms_vote_value: string;
  voted = false;
  no_choice_message = false;
  connect_options: ConnectOption[] = [
   {
     value: 'in ETAbot only',
     text: 'I want to be updated only outside of JIRA',
     info_text: 'We only need read access.',
     checked: false
   },
   {
     value: 'in JIRA',
     text: 'I want to get ETAs in JIRA tasks summaries',
     info_text: 'We need read and write access',
     checked: true
   }];
   connect_option_selected = 'in JIRA';
  tms_options: TMSoption[] = [
    {value: 'Asana', viewValue: 'Asana'},
    {value: 'MS Project', viewValue: 'MS Project'},
    {value: 'Monday', viewValue: 'Monday'},
    {value: 'Spreadsheets', viewValue: 'Spreadsheets'},
    {value: 'Pivotal', viewValue: 'Pivotal'},
    {value: 'Wrike', viewValue: 'Wrike'},
    {value: 'Monday.com', viewValue: 'Monday.com'},
    {value: 'Monday', viewValue: 'Monday'},
    {value: 'Trello', viewValue: 'Trello'},
    {value: 'Fabricator', viewValue: 'Fabricator'},
    {value: 'Teamwork.com', viewValue: 'Teamwork.com'},
    {value: 'Basecamp', viewValue: 'Basecamp'},
    {value: 'Rally', viewValue: 'Rally'},
    {value: 'AgileCraft', viewValue: 'AgileCraft'},
    {value: 'Version1/CollabNet', viewValue: 'Version1/CollabNet'},
    {value: 'Physical board', viewValue: 'Physical board'},
    {value: 'Plutio', viewValue: 'Plutio'}
  ];

  constructor(
      @Inject(DOCUMENT) private document: Document,
      private jiraService: JiraService,
      private etabot_api_service: EtabotApiService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 4;
    // this.connect_option_selected = this.connect_options[1];
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


  vote(choice: string) {
    // TODO: implement this.
    console.log('vote=' + choice);
    if (choice) {
        this.etabot_api_service.vote(choice).subscribe(
            res => {
                this.voted = true;
                this.no_choice_message = false;
            });
    } else {
        console.log('null choice');
        this.no_choice_message = true;
    }


  }

  link_tms(tms_name: string, permissions?: string) {
      console.log('linking to ' + tms_name);
      this.jiraService.link_tms(tms_name, permissions).subscribe(
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


