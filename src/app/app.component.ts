import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
  	if (environment.production) {
          console.log('prod env');
  		// localStorage.removeItem('username');
  		// localStorage.removeItem('currentUser');
  	}
  }
}
