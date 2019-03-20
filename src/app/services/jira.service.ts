import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class JiraService {
    private service_api_end_point: string;
    private token: string;
  constructor(private http: Http) {
    this.service_api_end_point = environment.apiUrl;
  }

  construct_options() {
        const loggedIn = JSON.parse(localStorage.getItem('currentUser'));
        this.token = loggedIn && loggedIn.token;
        console.log('token is ' + this.token);

        const headers = new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        });
        headers.append('Authorization', `Token ${this.token}`);
        const options = new RequestOptions({
          headers: headers
        });
        return options;
    }


  add_tms(owner: string, team_name: string, email: string, password: string) {
    console.log('team_name:' + team_name);
    const type = 'JI';
    const jiraObject = JSON.stringify(
        {endpoint: 'https://' + team_name + '.atlassian.net',
         username: email,
         password: password,
         type: type});

    return this.http.post(this.service_api_end_point + 'tms/', jiraObject, this.construct_options())
        .pipe(map((response: Response) => {
          if (String(response.status) === '201') {
            return true;
          } else {
            return false;
          }
        }));
  }

  get_tms() {
    return this.http.get(this.service_api_end_point + 'tms/', this.construct_options())
        .pipe(map((response: Response) => {
                const res = response.json();
                if (res.length === 0) {
                    throw new Error('user does not have TMS accounts');
                } else {
                    console.log('number of TMS accounts found: ' + res.length);
                    return res.length;
                }
        }));
  }

  delete_tms(tms_id) {

    return this.http.delete(this.service_api_end_point + 'tms/' + tms_id + '/', this.construct_options())
        .pipe(map((response: Response) => {
                const res = response.json();
                console.log(res);
        }));
  }

  patch_password_tms(tms_id, password) {
    const jiraObject = JSON.stringify(
        {  password: password });

    return this.http.patch(this.service_api_end_point + 'tms/' + tms_id + '/', jiraObject, this.construct_options())
        .pipe(map((response: Response) => {
                const res = response.json();
                if (res.length === 0) {
                    throw new Error('user does not have TMS accounts');
                } else {
                    console.log('number of TMS accounts found: ' + res.length);
                    return res.length;
                }
        }));
  }
}
