import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-vacation-block',
  templateUrl: './vacation-block.component.html',
  styleUrls: ['./vacation-block.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VacationBlockComponent implements OnInit {

	@Input() vacationStart: string;
	@Output() dateSubmitted: EventEmitter<string> = new EventEmitter();
  vacations: string[];
  date;
  zero = "0";
	calendarField: boolean;
  constructor() { }

  ngOnInit() {
  	this.calendarField = false;
    this.vacations = this.vacationStart.toString().split("-");
    //console.log(this.vacations);
    // if (parseInt(this.vacations[1]) < 10) {
    //   this.vacations[1] = this.zero.concat(this.vacations[1]);
    // }
    this.date = new Date(parseInt(this.vacations[0]), parseInt(this.vacations[1]), parseInt(this.vacations[2]) );
    //console.log(this.date);
  }


  updateStartDateVacation(event) {
  	console.log(event);
  	if (event.keyCode == 13) {
  		this.vacationStart = event.target.value;
  		console.log("this vacation " + this.vacationStart);
  		this.calendarField = false;
  	}
  }

}
