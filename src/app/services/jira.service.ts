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
  	let type = 'JI';
  	let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    headers.append('Authorization', `Token ${this.token}`);
    let options = new RequestOptions({
      headers: headers
    });
    var jiraObject = JSON.stringify({endpoint: 'https://' + team_name + '.atlassian.net', username: email, password: password, type: type});
   
    return this.http.post(this.service_api_end_point +'tms/', jiraObject, options)
        .pipe(map((response: Response) => {
          if (String(response.status) == "201")
            {
              console.log(response);
              return true;
            }
          else {
              return false;
          }
        }));
  }
}
