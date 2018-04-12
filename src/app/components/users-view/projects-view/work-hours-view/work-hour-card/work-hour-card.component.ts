import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-work-hour-card',
  templateUrl: './work-hour-card.component.html',
  styleUrls: ['./work-hour-card.component.css']
})
export class WorkHourCardComponent implements OnInit {

	@Input() workHourDay: any;

	@Input() workHourTime: Array<any>;

	@Output() deleteCard: any;
  dayData: string;
  dayDataEnd: string;
  startTime: string;
  endTime: string;

	isEdit: boolean; 
	isEditTimeStart: boolean;
  isEditTimeEnd: boolean;
  constructor() {
  	this.isEdit = false;
  	this.isEditTimeStart = false;
    this.isEditTimeEnd = false;
  	this.deleteCard = new EventEmitter();

  }

  days = [
    {count: '0', value: 'Sunday'},
    {count: '1', value: 'Monday'},
    {count: '2', value: 'Tuesday'},
    {count: '3', value: 'Wednesday'},
    {count: '4', value: 'Thursday'},
    {count: '5', value: 'Friday'},
    {count: '6', value: 'Saturday'},
  ];

  // hours = [
  //   {count: '0', value: '00'},
  //   {count: '1', value: '01'},
  //   {count: '2', value: '02'},
  //   {count: '3', value: '03'},
  //   {count: '4', value: '04'},
  //   {count: '5', value: '05'},
  //   {count: '6', value: '06'},
  //   {count: '7', value: '07'},
  //   {count: '8', value: '08'},
  //   {count: '9', value: '09'},
  //   {count: '10', value: '10'},
  //   {count: '11', value: '11'},
  //   {count: '12', value: '12'},
  //   {count: '13', value: '13'},
  //   {count: '14', value: '14'},
  //   {count: '15', value: '15'},
  //   {count: '16', value: '16'},
  //   {count: '17', value: '17'},
  //   {count: '18', value: '18'},
  //   {count: '19', value: '19'},
  //   {count: '20', value: '20'},
  //   {count: '21', value: '21'},
  //   {count: '22', value: '22'},
  //   {count: '23', value: '23'}
    
  // ];

  public trackByIndex(index: number, item) {
    return index;
  }
  keys: String[];
  ngOnInit() {
    this.keys = Object.keys(this.workHourTime);
    //console.log(Object.keys(this.workHourTime));
    //console.log(this.workHourTime);
    // for (var i = 0; i < this.workHourTime.length; i++) {
    //   this.dayData = this.workHourTime[i].start;
    //   this.dayDataEnd = this.workHourTime[i].end;
    //   this.startTime = this.dayData;
    //   this.endTime = this.dayDataEnd;
      //console.log("this.dayData of " + i + " is " + this.dayData);
      //console.log("this.dayDataEnd of " + i + " is " + this.dayDataEnd);
      //console.log(this.workHourTime[i]);
      //console.log("i is " + i);
      //console.log("the data for +" + i + " is "  + this.dayData.end);
    //}

    //console.log(this.workHourTime);
    //console.log(this.workHourTime);
  }


  submit(form: NgForm) {
  	this.workHourTime = form.controls['pickTime'].value;
  	console.log(this.workHourTime);
  	//this.isEditTime = false;
  }
  daySubmit(form: NgForm) {
  	console.log(form.controls['pickDay'].value);
  }
  deleteTime() {
  	this.deleteCard.emit();
  }
  /*
  editCheck() {
  	this.isEdit = false;
  	console.log(this.workHourDay);
  }
  */

}
