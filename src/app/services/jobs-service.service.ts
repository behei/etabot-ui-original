import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Job } from '../job';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {
  jobs = new Array<Job>;
  private local_jobs_source = new BehaviorSubject(this.jobs);
  local_jobs = this.local_jobs_source.asObservable();

  constructor(
      private http: Http,
      private authService: AuthService) { }

  add_job(job: Job) {
    console.log('adding job: ' + job.get_id());
    // todo: figure out if this creates a memory leak

    this.jobs.push(job);
    this.local_jobs_source.next(this.jobs);

  }

  get_job_status(job_id) {
     return this.http.get(environment.apiUrl + 'job-status/' + job_id + '/', this.authService.construct_options())
       .subscribe((response: Response) => {
           console.log('job id ' + job_id + ' status ');
           const res = response.json();
           console.log(res);
           console.log(res[job_id]);
       });
  }

}
