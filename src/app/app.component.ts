import { Component, HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	@HostListener('window:onunload', [ '$event' ])
  onunloadHandler(event) {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
  }
}
