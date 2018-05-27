import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
// import {Observable} from 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { AuthService } from './auth-service.service';

@Injectable()
export class EtabotApiService {
	private service_api_end_point: string;	
  public loginCheck = false;
  private token: string;
  @Output() projects: EventEmitter<any> = new EventEmitter();
  @Output() projectsReceived: EventEmitter<boolean> = new EventEmitter();
  constructor(private http:Http, private authService: AuthService) {
  	// depending on the environment (e.g. production or local) api end point could be different
  	this.service_api_end_point = environment.apiUrl;
    authService.getLoggedIn.subscribe(response => this.logInChange());
   }

   logInChange() {
     this.loginCheck = true;
   }


   get_real_projects() {
    var loggedIn = JSON.parse(localStorage.getItem('currentUser'))
    this.token = loggedIn && loggedIn.token;

     let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    headers.append('Authorization', `Token ${this.token}`);
    let options = new RequestOptions({
      headers: headers
    });

     return this.http.get(this.service_api_end_point + 'projects/', options)
       .subscribe((response: Response) => {
         if (response.status == 200) {
           let res = response.json();
           this.projects.emit(res);
           this.projectsReceived.emit(true);
           return true;
         }
         else {
           console.log("response status " + response.status);
           return false;
         }
       })
   };


}

