import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
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
  deviceInfo = null;
  device: string;
  notMobile = true;
  constructor(
  	private router: Router,
  	private deviceDetector: DeviceDetectorService) {
  		this.checkMobile();
  }

  checkMobile() {
  	this.deviceInfo = this.deviceDetector.getDeviceInfo();
    this.device = this.deviceInfo.device;
   if (this.device !== "unknown") {
   	this.notMobile = false;
   	this.router.navigate(['/mobile']);
   }
   else {
   	this.router.navigate(['/'])
   }
  }
}
