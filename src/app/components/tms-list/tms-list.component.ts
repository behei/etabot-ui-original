import { Component, OnInit } from '@angular/core';
import { JiraService } from '../../services/jira.service';
import { TmsCardComponent } from '../tms-card/tms-card.component';
import { isEmpty } from '../../tools';
import { Router, ActivatedRoute} from '@angular/router';
import { JobsServiceService } from '../../services/jobs-service.service';
import { Job } from '../../job';

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
    parsing_logs = '';

  constructor(
        private tms_service: JiraService,
        private jobs_service: JobsServiceService,
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
                      const remaining_new_tms_celery_jobs = [];
                      const job_done_callback = (job: Job) => {
                          const done_job_id = job.get_id();
                          console.log('deleting ' + done_job_id + 'from: ' + remaining_new_tms_celery_jobs);
                          delete remaining_new_tms_celery_jobs[done_job_id];

                        const index: number = remaining_new_tms_celery_jobs.indexOf(done_job_id);
                        if (index !== -1) {
                            remaining_new_tms_celery_jobs.splice(index, 1);
                        }
                          console.log('updated remaining_new_tms_celery_jobs ' + remaining_new_tms_celery_jobs);
                          if (remaining_new_tms_celery_jobs.length === 0) {
                              this.router.navigate(['/projects']);
                          }
                      }
                    for (const new_tms_id of this.new_tms_ids) {
                        console.log('parsing new TMS id ' + new_tms_id);
                        // this.parsing_projects.add(new_tms_id);
                        this.tms_service.parse_projects(new_tms_id, job_done_callback).subscribe(
                            parse_result => {

                                console.log('started job correctly tms id ' + new_tms_id);
                                console.log(parse_result);


                                console.log(typeof(parse_result));
                                for (const job of parse_result) {
                                    console.log(job);
                                    remaining_new_tms_celery_jobs.push(job.get_id());
                                }

                                // this.parsing_projects.delete(new_tms_id);
                                // console.log('parsing_logs: ');
                                // this.parsing_logs += parse_result['result'] + '\n';
                                // console.log(this.parsing_logs);
                                // if (this.parsing_projects.size === 0) {
                                //     if (confirm('Done pulling projects! \n ' +
                                //         this.parsing_logs + 'Redirect to projects screen?')) {
                                //         this.router.navigate(['/projects']);
                                //     }
                                // }
                            },
                            error => {
                                const error_message = 'error in parsing tms id ' + new_tms_id;
                                console.log(error_message);
                                this.parsing_logs += error_message + '\n';
                                // this.parsing_projects.delete(new_tms_id);
                                // if (this.parsing_projects.size === 0) {
                                //     if (confirm('Redirect to projects screen?')) {
                                //         this.router.navigate(['/projects']);
                                //     }

                                // }
                              }
                            );
                    }
                }
                // TODO: this kicks in prematurely
              this.jobs_service.local_jobs_done_dict.subscribe(

                  );

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
