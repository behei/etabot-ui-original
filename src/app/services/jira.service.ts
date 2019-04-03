import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class JiraService {
    private service_api_end_point: string;
    private token: string;
    @Output() tmss: EventEmitter<any> = new EventEmitter();
    constructor(private http: Http) {
        this.service_api_end_point = environment.apiUrl;
    }

  jira(owner: string, team_name: string, email: string, password: string) {
    const loggedIn = JSON.parse(localStorage.getItem('currentUser'));
    this.token = loggedIn && loggedIn.token;
    console.log('token is ' + this.token);
    const type = 'JI';
// todo: check type from url
//         if 'atlassian.net' in self.server:
//             self.TMS_type = TMSTypes.JIRA
//         else:
//             raise NameError('cannot recognize Task Management System \
// based on server name {}'.format(server))

    const headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    headers.append('Authorization', `Token ${this.token}`);
    const options = new RequestOptions({
      headers: headers
    });
    console.log('team_name:' + team_name);
    const jiraObject = JSON.stringify(
        {endpoint: 'https://' + team_name + '.atlassian.net',
         username: email, password: password,
         type: type});

    return this.http.post(this.service_api_end_point + 'tms/', jiraObject, options)
        .pipe(map((response: Response) => {
          if (String(response.status) === '201') {
            return true;
          } else {
            return false;
        }
    }));
  }

  get_tms() {
    const loggedIn = JSON.parse(localStorage.getItem('currentUser'));
    this.token = loggedIn && loggedIn.token;
    const headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    headers.append('Authorization', `Token ${this.token}`);
    const options = new RequestOptions({
        headers: headers
    });
    console.log('starting GET reqest for tms api: ' + this.service_api_end_point + 'tms/');
    return this.http.get(this.service_api_end_point + 'tms/', options)
        .subscribe((response: Response) => {
                console.log('response receieved');
                const res = response.json();
                console.log(
                   'get_tms 200 response status: '
                   + response.status
                   + 'json: '
                   + JSON.stringify(res));
                if (res.length === 0) {
                    throw new Error('user does not have TMS accounts');
                } else {
                    console.log('number of TMS accounts found: ' + res.length);
                    this.tmss.emit(res);
                    return res.length;
                }
        });
  }
}
