import { Component, OnInit, Input } from '@angular/core';
import { EtabotApiService } from '../../../../services/etabot-api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-vacations',
  templateUrl: './vacations.component.html',
  styleUrls: ['./vacations.component.css']
})
export class VacationsComponent implements OnInit {

  @Input() vacationData: Array<any>;
  splitData: string;
  openDate: boolean;
  // updatedDate: string;
  calendarView: boolean;
  @Input() id: number;
  constructor(
    private etabotAPI: EtabotApiService
    ) {
    //console.log(this.vacationData[0]);
    this.openDate = false;
    this.calendarView = true;
  }

  ngOnInit() {
    console.log(this.vacationData);
  //   this.vacationData.sort( function(field1, field2) {
  //     if ( field1.start < field2.end ){
  //       return -1;
  //     }else if( field1.start > field2.end ){
  //         return 1;
  //     }else{
  //       return 0;  
  //     }
  // });
    //console.log(this.vacationData[0].start.toString().split('.'));
    //this.splitData = this.vacationData;//.split("");
    //this.splitData = JSON.parse(this.vacationData);
    //console.log(this.id + " id ");
    //console.log(this.vacationData);
    // if (this.vacationData instanceof Array) {
    //   console.log("it is an array");
    // }
    // else {
    //   console.log("it is not an array");
    // }

  }


  vacationStart() {
    console.log('vacation start')
    this.openDate = true;
  }



  addVacationField() {
    var todayDate = moment().format('YYYY-MM-DD');
    var endingDate = moment().add(14, 'days').format('YYYY-MM-DD');
    var newVacation = 
      {
        start: todayDate, 
        end: endingDate
      };
    this.vacationData.push(newVacation);
  }






}