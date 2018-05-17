import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
//import { Observable}     from 'rxjs/Observable';
import { map } from "rxjs/operators";
import { environment } from '../../environments/environment';

@Injectable()
export class SignUpService {
  private signUpSuccess: any;
  private service_api_end_point: string;
  @Output() getRegisteredStatus: EventEmitter<boolean> = new EventEmitter(); 
  constructor(private http: Http) {
    this.signUpSuccess = true;
    this.service_api_end_point = environment.apiUrl;
  }

  
  signup(username: string, email: string, password: string) {
    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });

    var userObject = JSON.stringify({username: username, password: password, email: email});
   
    headers.append('X-CSRFToken', 'csrftoken');
    return this.http.post(this.service_api_end_point +'users/', userObject, options)
        .pipe(map((response: Response) => {
          if (String(response.status) == "201")
            {
              console.log(response);
              this.getRegisteredStatus.emit(true);
              localStorage.setItem('username', username);
              return true;
            }
          else {
              this.getRegisteredStatus.emit(false);
              return false;
          }
        }));
  }



    signupSuccess() {
      return this.signUpSuccess;
    }

    private handleError(error: Response) {
        //this.signUpSuccess = false;
        console.error("error" + error);
        //return Observable.throw(error.json().error || 'Server error');
    }

}
