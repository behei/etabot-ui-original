import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthService {

    public token: string;
    // service_api_end_point: string;
    public users: any;

    @Output() getLoggedIn: EventEmitter<boolean> = new EventEmitter();

    constructor(private http:Http, private router: Router) {
        // this.service_api_end_point = 
    }

    // var loggedIn = JSON.parse(localStorage.getItem('currentUser'))
    // this.token = loggedIn && loggedIn.token;


    login(username: string, password: string) {
        let headers = new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({
            headers: headers
        });

        return this.http.post(environment.apiUrl + 'get-token/', JSON.stringify({ username: username, password: password }), options)
                .pipe(map((response: Response) => {
                    
          
                let user = response.json();
              if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('username', username);
                this.token = user.token
                this.getLoggedIn.emit(true);
                return true;

              }
              else {
                 this.getLoggedIn.emit(false);
                return false;

              }
        }));

    }

    logout() {
        this.token = null;
        localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    this.getLoggedIn.emit(false);
    this.router.navigate(['/']);
    }
}