import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-advanced-settings',
  templateUrl: './advanced-settings.component.html',
  styleUrls: ['./advanced-settings.component.css']
})
export class AdvancedSettingsComponent implements OnInit {

	showAdvancedSettings: boolean;
	isEditPlanningPeriod: boolean;
	isEditOpenTasks: boolean;
	@Input() grace_period: string;
  @Input() open_status: string;
  @Output() updated_grace_period: EventEmitter<string> = new EventEmitter();
  @Output() array_updated_open_status_emitter: EventEmitter<any> = new EventEmitter();
  arrayUpdatedOpenStatus: string[] = [];
  constructor() {
  	this.showAdvancedSettings = false;
  	this.isEditPlanningPeriod = false;
  	this.isEditOpenTasks = false;
    //this.arrayUpdatedOpenStatus.push("some text");
    //console.log(this.arrayUpdatedOpenStatus);
    //this.array_updated_open_status.push("text");
    //this.array_updated_open_status.push("");
  }

  ngOnInit() {
    if (this.open_status !== undefined) {
      this.arrayUpdatedOpenStatus.push(this.open_status);
      console.log(this.arrayUpdatedOpenStatus);
      //this.array_updated_open_status.push(this.open_status);
      //console.log("array" + this.array_updated_open_status);
    }
    else {
      console.log("i am empty, yo");
    }  
  }

  submit(form: NgForm, event: Event) {
    event.preventDefault();
  	this.grace_period = form.controls['pickPeriod'].value;
  	this.isEditPlanningPeriod = false;
    console.log(this.grace_period);
    this.updated_grace_period.emit(this.grace_period); //to send the data back to the parent component to make an http request to django
  }

  submitTask(form: NgForm) {
  	this.open_status = form.controls['open_status'].value;
    if (this.arrayUpdatedOpenStatus.includes(this.open_status)) {
      console.log("it already exist");
      this.array_updated_open_status_emitter.emit(this.arrayUpdatedOpenStatus);
    }
    else {
      this.arrayUpdatedOpenStatus.push(this.open_status);
      console.log(this.arrayUpdatedOpenStatus);
      this.array_updated_open_status_emitter.emit(this.arrayUpdatedOpenStatus);
    }
  }

  addOpenStatus() {
    this.arrayUpdatedOpenStatus.push(""); //add functionality
  }



}
