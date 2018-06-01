import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response, Request, RequestMethod, Headers, RequestOptions } from '@angular/http';
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
   
    return this.http.post(this.service_api_end_point +'users/', userObject, options)
        .pipe(map((response: Response) => {
          if (String(response.status) == "201")
            {
              //let user = response.json();
              //console.log("sign up token is " + user.token);

              this.getRegisteredStatus.emit(true);
              let newUser = true;
              localStorage.setItem('newUser', String(newUser))
              localStorage.setItem('email', email);
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
