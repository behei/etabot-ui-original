import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Job } from '../../../job';
import { JobsServiceService } from '../../../services/jobs-service.service';
import { interval } from 'rxjs';
import { JobStatus } from '../../../job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css']
})
export class JobCardComponent implements OnInit, DoCheck {
  @Input() job: Job;

  // private _job: Job;

  // @Input()
  // set job(job: Job) {
  //   console.log('setting job to new Input value with status' + job.get_status());
  //   this._job = job;



  //   console.log('finished setting job to new Input value');
  // }

  // get job(): Job { return this._job; }

  @Output() delete: EventEmitter<Job> = new EventEmitter();

  timer: any;
  period = 1300; // in ms
  previous_job_state: JobStatus;
  timer_on = false;

  constructor(
      private job_service: JobsServiceService
      ) { }

    ngDoCheck() {
        if (this.job.get_status() !== this.previous_job_state) {
            console.log('job state has changed');
      if (this.job.get_status() === JobStatus.done) {
          console.log('job is done, deleting the card');
          this.deleteMe();
      } else {
          console.log('job is not done yet, starting timer.');
          if (this.timer_on) {
              console.log('timer is already on');
          } else {
              this.period = this.period * 1.5;
              this.set_timer(this.period);
          }
      }

        }
    }
  set_timer(period) {
    console.log('starting timer with period ' + period);
    this.timer = interval(period).subscribe((val) => {
        this.update_job_status();
    });
    this.timer_on = true;
    console.log('finished timer setting with period ' + period);
  }

  ngOnInit() {
      this.set_timer(this.period);
  }

  deleteMe() {
      console.log('self deleting card');
      this.delete.emit(this.job);
      console.log('deleteMe finished');
  }

  update_job_status() {
      console.log('job card starting updating job status.');
      const res = this.job_service.get_job_status(this.job.get_id());
      console.log('unsubscribing from timer');
      this.timer.unsubscribe();
      this.timer_on = false;
      console.log('unsubscribed from timer');
      console.log('job card finished updating job status.');

  }
}
