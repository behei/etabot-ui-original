import { Component, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth-service.service';
declare var $: any;
@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements AfterViewInit  {

  // public images = listImages;
  isLoggedIn = false;
  constructor(
      private authService: AuthService
    ) {
    authService.getLoggedIn.subscribe(response => this.changeLogInStatus());
  }
  private changeLogInStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  ngAfterViewInit() {
  // 	$(document).ready(function() {
  // 		$(".carousel.carousel-slider").carousel({ full_width: true });
		// });

		// setInterval(function() {
  // 		$(".carousel").carousel("next");
		// }, 500000);
  }
}

// var listImages: Image[] = [
// 	{ "title": "cat #1", "url": "http://bit.ly/2xEJdb8" },
// 		{"title": "cat #2", "url": "http://bit.ly/2xEJdb8"},
// 		{"title": "cat #3", "url": "http://bit.ly/2xEJdb8"}
// ];
