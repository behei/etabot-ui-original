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
         type: type});

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
                    throw new Error('user does not have TMS accounts');
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

  patch_password_tms(tms_id, password) {
    const jiraObject = JSON.stringify(
        {  password: password });

    return this.http.patch(this.service_api_end_point + 'tms/' + tms_id + '/', jiraObject, this.authService.construct_options())
        .pipe(map((response: Response) => {
                const res = response.json();
                if (res.length === 0) {
                    throw new Error('user does not have TMS accounts');
                } else {
                    console.log('number of TMS accounts found: ' + res.length);
                    this.tmss.emit(res);

                    return res.length;
                }
        }));
  }
}
