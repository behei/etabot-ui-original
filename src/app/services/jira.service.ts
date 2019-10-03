import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { AuthService } from './auth-service.service';

@Injectable()
export class JiraService {
    private service_api_end_point: string;
    private token: string;
    @Output() tmss: EventEmitter<any> = new EventEmitter();
    constructor(
        private http: Http,
        private authService: AuthService) {
            this.service_api_end_point = environment.apiUrl;
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
            return true;
          } else {
            return false;
          }
        }));
  }

  get_tms() {
    console.log('started get_tms');
    return this.http.get(this.service_api_end_point + 'tms/', this.authService.construct_options())
        .pipe(map((response: Response) => {
                const res = response.json();
                console.log('get_tms response: ' + res);
                if (res.length === 0) {
                    console.log('zero of TMS accounts found: ');
                    this.tmss.emit(res);
                } else {
                    console.log('number of TMS accounts found: ' + res.length);
                    console.log('emitting tmss');
                    this.tmss.emit(res);
                    console.log('done emitting tmss');
                    return res.length;
                }
        }));
  }

  delete_tms(tms_id) {

    return this.http.delete(this.service_api_end_point + 'tms/' + tms_id + '/', this.authService.construct_options())
        .pipe(map((response: Response) => {
                const res = response.json();
                console.log(res);
        }));
  }

  parse_projects(tms_id) {
    console.log('started parse_projects with tms_id ' + tms_id);
    // const params = JSON.stringify(
    //     {tms: tms_id});
    // console.log('params: ' + params);
    return this.http.get(this.service_api_end_point + 'parse_projects/?tms=' + tms_id, this.authService.construct_options())
        .pipe(map((response: Response) => {
            const res = response.json();
            console.log('parse_projects response: ' + res);
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
