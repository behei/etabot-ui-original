import { Component, OnInit } from '@angular/core';
import { Job } from '../../job';
import { JobsServiceService } from '../../services/jobs-service.service';

@Component({
  selector: 'app-jobs-monitor',
  templateUrl: './jobs-monitor.component.html',
  styleUrls: ['./jobs-monitor.component.css']
})
export class JobsMonitorComponent implements OnInit {
    jobs_status_dict: any;
    loaded_data = false;

  constructor(
      private jobs_service: JobsServiceService) {
          this.updateJobsStatuses();
  }

  deleteJobCard(job) {
      console.log('deleteJobCard called');
      this.jobs_service.delete_job(job.get_id());
  }

  updateJobsStatuses() {
      console.log('job monitor started updating Jobs Statuses.');
      this.jobs_service.local_jobs_dict.subscribe(
          jobs_status_dict => {
              this.jobs_status_dict = jobs_status_dict;
              console.log('job monitor finished updating Jobs Statuses.');
              this.loaded_data = true;
              // console.log(this.jobs_status_dict);
          });
  }

  ngOnInit() {
      this.updateJobsStatuses();

  }

}
