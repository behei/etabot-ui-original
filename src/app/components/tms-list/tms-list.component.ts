import { Component, OnInit } from '@angular/core';
import { JiraService } from '../../services/jira.service';
import { TmsCardComponent } from '../tms-card/tms-card.component';

@Component({
  selector: 'app-tms-list',
  templateUrl: './tms-list.component.html',
  styleUrls: ['./tms-list.component.css']
})
export class TmsListComponent implements OnInit {
    tmss: any;

  constructor(
      private tms_service: JiraService) {
          tms_service.get_tms().subscribe();
          tms_service.tmss.subscribe(data => this.setTmss(data));
      }

  ngOnInit() {
  }

  setTmss(data) {
      console.log('saving TMS data');
      this.tmss = data;
  }

}
