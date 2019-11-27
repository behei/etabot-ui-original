import { Component, OnInit } from '@angular/core';
import { JiraService } from '../../services/jira.service';
import { TmsCardComponent } from '../tms-card/tms-card.component';
import { isEmpty } from '../../tools';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tms-list',
  templateUrl: './tms-list.component.html',
  styleUrls: ['./tms-list.component.css']
})
export class TmsListComponent implements OnInit {
    tmss: any;
    loaded_data = false;
    c_isEmpty = isEmpty;
    new_tms_ids = [];
    parsing_projects = new Set();

  constructor(
        private tms_service: JiraService,
        private router: Router,
        private route: ActivatedRoute) {

    tms_service.get_tms().subscribe();
    tms_service.tmss.subscribe(data => this.setTmss(data));

    this.route.queryParams.subscribe(params => {
            console.log('got route params: ');
            console.log(params);

            if ('new_tms_ids' in params) {
                if (typeof(params['new_tms_ids']) === 'string') {
                    this.new_tms_ids.push(Number(params['new_tms_ids']));
                } else {
                    for (const val of params['new_tms_ids']) {
                        this.new_tms_ids.push(Number(val));
                    }
                }
                console.log('this.new_tms_ids: ');
                console.log(this.new_tms_ids);
                if (this.new_tms_ids) {
                    for (const new_tms_id of this.new_tms_ids) {
                        console.log('parsing new TMS id ' + new_tms_id);
                        this.parsing_projects.add(new_tms_id);
                        this.tms_service.parse_projects(new_tms_id).subscribe(
                            parse_result => {
                                console.log('parsed correctly tms id ' + new_tms_id);
                                this.parsing_projects.delete(new_tms_id);
                                if (this.parsing_projects.size === 0) {
                                    this.router.navigate(['/projects']);
                                }},
                            error => {
                                console.log('error in parsing tms id ' + new_tms_id);
                                this.parsing_projects.delete(new_tms_id);
                                if (this.parsing_projects.size === 0) {
                                    this.router.navigate(['/projects']);
                                }
                              }
                            );
                    }
                }
            }
        });


    }

  ngOnInit() {
  }

  setTmss(data) {
    console.log('saving TMS data');
    this.tmss = data;
    this.loaded_data = true;
    console.log('is Empty: ' + isEmpty(this.tmss));

    }
}
