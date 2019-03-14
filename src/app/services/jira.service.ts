import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable()
export class JiraService {
    private service_api_end_point: string;
    private token: string;
  constructor(private http: Http) {
    this.service_api_end_point = environment.apiUrl;
  }

  jira(owner: string, team_name: string, email: string, password: string) {
    var loggedIn = JSON.parse(localStorage.getItem('currentUser'))
    this.token = loggedIn && loggedIn.token;
    console.log("token is " + this.token)
    let type = 'JI';
// todo: check type from url         
//         if 'atlassian.net' in self.server:
//             self.TMS_type = TMSTypes.JIRA
//         else:
//             raise NameError('cannot recognize Task Management System \
// based on server name {}'.format(server))

    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    headers.append('Authorization', `Token ${this.token}`);
    let options = new RequestOptions({
      headers: headers
    });
    console.log('team_name:' + team_name)
    var jiraObject = JSON.stringify({endpoint: 'https://' + team_name + '.atlassian.net', username: email, password: password, type: type});
   
    return this.http.post(this.service_api_end_point +'tms/', jiraObject, options)
        .pipe(map((response: Response) => {
          if (String(response.status) === "201")
            return true;
          else 
            return false;
        }));
  }

  get_tms() {
    var loggedIn = JSON.parse(localStorage.getItem('currentUser'));
    this.token = loggedIn && loggedIn.token;
    let headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });
    headers.append('Authorization', `Token ${this.token}`);
    let options = new RequestOptions({
        headers: headers
    });

    return this.http.get(this.service_api_end_point + 'tms/', options)
        .pipe(map((response: Response) => {
                let res = response.json();
                if (res.length == 0) {
                    throw new Error('user does not have TMS accounts');
                }
                else {
                    console.log('number of TMS accounts found: ' + res.length)
                    return res.length;
                }
        }))
  }
}
