import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from './auth-service.service';
import { Job } from '../job';
import { JobStatus } from '../job';
import { JobsServiceService } from './jobs-service.service';

@Injectable()
export class JiraService {
    private service_api_end_point: string;
    private token: string;
    @Output() tmss: EventEmitter<any> = new EventEmitter();
    @Output() oauth_url: EventEmitter<any> = new EventEmitter();
    constructor(
        private http: Http,
        private jobs_service: JobsServiceService,
        private authService: AuthService) {
            this.service_api_end_point = environment.apiUrl;
    }


  link_tms(tms_name: string, permissions?: string) {
    let url = this.service_api_end_point + tms_name;
    if (permissions) {
        url = url + '?permissions=' + permissions;
    }
    console.log('jira.service linking tms: ' + url);

    const options = this.authService.construct_options();
    console.log('options: ');
    console.log(options);
    return this.http.get(url, options)
        .pipe(map((response: Response) => {
          const res = JSON.parse(response.json());
          console.log(res);
          this.oauth_url.emit(res);
          if (String(response.status) === '201') {
            console.log('201');
            return res;
          } else {
            console.log('not 201');
            return res;
          }
        }));
  }

  add_tms(owner: string, tms_url: string, email: string, password: string) {
    console.log('tms_url:' + tms_url);
    const type = 'JI';
    const jiraObject = JSON.stringify(
        {endpoint: tms_url,
         username: email,
         password: password,
         type: type,
         connectivity_status: 'not tested.'});

    return this.http.post(this.service_api_end_point + 'tms/', jiraObject, this.authService.construct_options())
        .pipe(map((response: Response) => {
          if (String(response.status) === '201') {
            return response.json();
          } else {
            return null;
          }
        }));
  }

  get_tms() {
    console.log('started get_tms');
    return this.http.get(this.service_api_end_point + 'tms/', this.authService.construct_options())
        .pipe(map((response: Response) => {
            const res = response.json();
            console.log('get_tms response: ' + res);
            console.log('number of TMS accounts found: ' + res.length);
            console.log('emitting tmss');
            this.tmss.emit(res);
            console.log('done emitting tmss');
            return res.length;

        }));
  }


  delete_tms(tms_id) {

    return this.http.delete(this.service_api_end_point + 'tms/' + tms_id + '/', this.authService.construct_options())
        .pipe(map((response: Response) => {
                const res = response.json();
                console.log(res);
        }));
  }

  parse_projects(tms_id, selected_projects, job_callback?) {
    console.log('started parse_projects with tms_id ' + tms_id);
    // const params = JSON.stringify(
    //     {tms: tms_id});
    // console.log('params: ' + params);
    const api_call = this.service_api_end_point + 'parse_projects/?tms=' + tms_id;
    return this.http.get(api_call, this.authService.construct_options())
        .pipe(map((response: Response) => {
            const res = response.json();
            console.log('parse_projects response: ' + res + 'type = ' + typeof(res));
            const response_json = JSON.parse(res);
            console.log(response_json);
            const celery_task_ids = response_json['celery_task_ids'];
            console.log(celery_task_ids);
            let jobs: Job[];
            jobs = [];
            for (const celery_task_id of celery_task_ids) {
                console.log(celery_task_id);
                const new_job = new Job(
                    celery_task_id,
                    'importing projects for tms id ' + tms_id,
                    JobStatus.in_progress,
                    api_call,
                    {'tms_id': tms_id});
                new_job.callback = job_callback;
                jobs.push(new_job);
                this.jobs_service.add_job(new_job);
            }
            return jobs;
        }));
  }

  patch_username_password_tms(tms_id, username, password) {
    const jiraObject = JSON.stringify(
        {  username: username,
           password: password });

    return this.http.patch(this.service_api_end_point + 'tms/' + tms_id + '/', jiraObject, this.authService.construct_options())
        .pipe(map((response: Response) => {
                const res = response.json();
                console.log(res);
        }));
  }


  parse_error(error) {
      let error_message = String(error._body);
        if (String(error.status) === '400') {
            if (error._body.includes('Unauthorized (401)') || error._body.includes('cannot connnect to TMS') ) {
                error_message = 'Cannot connect - please check address, combination of username/email and password, and try again.';
            } else {
                if (error._body.includes('already exists for this user')) {
                    error_message = 'This username and team name already exist in your account. \
Please enter another one or edit your existing one in projects screen.';
                } else if (error._body.includes('Need to pass CAPTCHA challenge first.')) {
                    const error_obj = JSON.parse(error._body);
                    console.log(error_obj);
                    console.log(error_obj.non_field_errors);
                    error_message = error_obj.non_field_errors[0];
                } else {
                    error_message = 'Bad request (4xx) - Cannot connnect - please check\
 all inputs and try again. If the issue persists, please report the issue to \
 hello@etabot.ai';
                }
            }
        }
        console.log(error);
        return error_message;
    }
}
