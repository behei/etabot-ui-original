import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-box',
  templateUrl: './error-box.component.html',
  styleUrls: ['./error-box.component.css']
})
export class ErrorBoxComponent implements OnInit {
  @Input() error_message: String;
  constructor() {
      this.error_message = '';
    }

  ngOnInit() {
  }

}
