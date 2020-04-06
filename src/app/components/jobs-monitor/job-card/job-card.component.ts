import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../../job';
import { JobsServiceService } from '../../../services/jobs-service.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit {
  @Input() job: Job;

  constructor(
      private job_service: JobsServiceService
      ) { }

  ngOnInit() {
  }

  update_job_status() {
      this.job_service.get_job_status(this.job.get_id());

  }
}
