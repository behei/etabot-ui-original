import { Component, OnInit } from '@angular/core';
import { Job } from '../../job';
import { JobsServiceService } from '../../services/jobs-service.service';

@Component({
  selector: 'app-jobs-monitor',
  templateUrl: './jobs-monitor.component.html',
  styleUrls: ['./jobs-monitor.component.css']
})
export class JobsMonitorComponent implements OnInit {
    local_jobs: Job[] = [];
    loaded_data = true;

  constructor(
      private jobs_service: JobsServiceService) {
      this.jobs_service.local_jobs.subscribe(local_jobs => this.local_jobs = local_jobs);
  }

  ngOnInit() {
      this.jobs_service.local_jobs.subscribe(local_jobs => this.local_jobs = local_jobs);
  }

}
