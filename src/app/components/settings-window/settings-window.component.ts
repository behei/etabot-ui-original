import { Component, OnInit, Input } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-settings-window',
  templateUrl: './settings-window.component.html',
  styleUrls: ['./settings-window.component.css']
})
export class SettingsWindowComponent implements OnInit {
  tms: any;
  project: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    console.log(this.data);
    this.tms = this.data['tms'];
    this.project = this.data['project'];

  }

}
