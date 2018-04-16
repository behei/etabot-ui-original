import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vacation-block-end',
  templateUrl: './vacation-block-end.component.html',
  styleUrls: ['./vacation-block-end.component.css']
})
export class VacationBlockEndComponent implements OnInit {

	@Input() vacationEnd: string;
 
  vacations: string[];
  date;
  zero = "0";
  calendarField: boolean;
  constructor() { }

  ngOnInit() {
  	this.calendarField = false;
    this.vacations = this.vacationEnd.toString().split("-");
    //console.log(this.vacations);
    // if (parseInt(this.vacations[1]) < 10) {
    //   this.vacations[1] = this.zero.concat(this.vacations[1]);
    // }
    this.date = new Date(parseInt(this.vacations[0]), parseInt(this.vacations[1]), parseInt(this.vacations[2] ));
  }

  updateEndDateVacation(event) {
  	console.log(event);
  	if (event.keyCode == 13) {
  		this.vacationEnd = event.target.value;
  		console.log("this vacation " + this.vacationEnd);
  		this.calendarField = false;
  	}
  }

}
