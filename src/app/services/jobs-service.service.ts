import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Job } from '../job';
import { JobStatus } from '../job';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {
  jobs_dict = {};
  // jobs_dict = {'test': new Job('w3r3r', 'test', 0, 'http', {})};
  private local_jobs_source = new BehaviorSubject(this.jobs_dict);
  local_jobs_dict = this.local_jobs_source.asObservable();

  jobs_done_dict = {};
  private local_jobs_done_source = new BehaviorSubject(this.jobs_done_dict);
  local_jobs_done_dict = this.local_jobs_done_source.asObservable();

  constructor(
      private http: Http,
      private authService: AuthService) { }

  add_job(job: Job) {
    console.log('adding job: ' + job.get_id());
    // todo: figure out if this creates a memory leak

    this.jobs_dict[job.get_id()] = job;
    // this.publish_updates();

  }

  publish_updates() {
    // this.jobs_dict[job_id] = updated_job;
    console.log('job services started publishing updates.');
    this.local_jobs_source.next(this.jobs_dict);
    console.log('job services finihsed publishing updates.');
  }

  delete_job(job_id) {
      console.log('moving to done job ' + job_id);
      const job = this.jobs_dict[job_id];
      this.jobs_done_dict[job.get_id()] = job;
      delete this.jobs_dict[job.get_id()];
      console.log('deleted job ' + job_id);
      console.log(this.jobs_done_dict);
      // this.publish_updates();
  }

  get_job_status(job_id) {
      const job = this.jobs_dict[job_id];
      if (job instanceof Job) {
         return this.http.get(environment.apiUrl + 'job-status/' + job_id + '/', this.authService.construct_options())
           .subscribe((response: Response) => {
               const res = response.json();
               const job_status = res[job_id];
               console.log('job id ' + job_id + ' status ' + job_status);
               if (job_status === 'PENDING') {
                   job.set_status(JobStatus.in_progress);
               } else if (job_status === 'SUCCESS') {
                   job.set_status(JobStatus.done);
                   job.execute_callback();
               } else if (job_status === 'FAILURE') {
                   job.set_status(JobStatus.failed);
                   job.execute_callback();
               } else {
                 job.set_status(JobStatus.unknown);
               }

               // this.publish_updates();

           });
       } else {
           console.log('no local job with id ' + job_id);
           return null;
       }

  }

}
