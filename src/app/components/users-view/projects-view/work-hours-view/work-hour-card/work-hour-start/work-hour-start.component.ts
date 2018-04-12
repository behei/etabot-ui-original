import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-work-hour-start',
  templateUrl: './work-hour-start.component.html',
  styleUrls: ['./work-hour-start.component.css']
})
export class WorkHourStartComponent implements OnInit {
	@Input() start: any;
	@Input() end: any;
	isEditable: boolean;
	isEdit: boolean;
	time: string;
	timeEnd: string;
  constructor() {
  	this.isEditable = false;
  	this.isEdit = false;
  }

  ngOnInit() {
  	this.time = this.start;
  	this.timeEnd = this.end;
  	//console.log("time start is " + this.time);
  	//console.log("time end is " + this.timeEnd);
  	//console.log(this.hours);
  }

  justLogging() {
  	console.log("I changed");
  }

  hours = [
    {count: '0', value: '00'},
    {count: '1', value: '01'},
    {count: '2', value: '02'},
    {count: '3', value: '03'},
    {count: '4', value: '04'},
    {count: '5', value: '05'},
    {count: '6', value: '06'},
    {count: '7', value: '07'},
    {count: '8', value: '08'},
    {count: '9', value: '09'},
    {count: '10', value: '10'},
    {count: '11', value: '11'},
    {count: '12', value: '12'},
    {count: '13', value: '13'},
    {count: '14', value: '14'},
    {count: '15', value: '15'},
    {count: '16', value: '16'},
    {count: '17', value: '17'},
    {count: '18', value: '18'},
    {count: '19', value: '19'},
    {count: '20', value: '20'},
    {count: '21', value: '21'},
    {count: '22', value: '22'},
    {count: '23', value: '23'}
    
  ];
}
