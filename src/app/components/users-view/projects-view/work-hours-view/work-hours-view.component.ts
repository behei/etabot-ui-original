import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EtabotApiService } from '../../../../services/etabot-api.service'


@Component({
  selector: 'app-work-hours-view',
  templateUrl: './work-hours-view.component.html',
  styleUrls: ['./work-hours-view.component.css']
})
export class WorkHoursViewComponent implements OnInit {

	@Input() id: number;
	workHours: Array<any>;
	notExceedLimit: boolean;
	lowerLimitReached: boolean;
	deleteThisTime: boolean;
	cardWasSelected: boolean;
  dayKeys: any;
  key: any;
  
  @Output() timeZone: EventEmitter<string> = new EventEmitter();
	@Input() workHoursData: Array<any>;
  @Output() dayEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private etabotAPI: EtabotApiService) {
  	//this.workHours = etabotAPI.get_all_hours();
  	//console.log(this.workHours);
  	this.notExceedLimit = true;
  	this.lowerLimitReached = false;
  	this.cardWasSelected = false;

  }

  addWorkHours(day, hours) {
    var tempObject = {
      "Sunday": [{
        "end": "16",
        "start": "10"
      }]
    }
    //this.workHoursData.push(new WorkHours(day, hours));
    this.workHoursData.sort( function(field1, field2) {
      if ( field1.start < field2.end ){
        return -1;
      }else if( field1.start > field2.end ){
          return 1;
      }else{
        return 0;  
      }
  });
    this.workHoursData = Object.assign(this.workHoursData, tempObject, this.workHoursData);
    // console.log(this.workHoursData);
    // console.log(Object.keys(this.workHoursData));
    this.passData(Object.keys(this.workHoursData)[2]);
    // console.log(this.workHoursData);
    //this.workHoursData.push();
  	//console.log("adding more hours...");
  	//this.workHours.push("Wednesday");
  	
  	/*if (this.workHours.length >= 7)
  		return;
  	else*/
  		//this.etabotAPI.add_hour();

  }

  cardSelected() {
  	this.cardWasSelected = true;
  }

  passData(key) {
    // console.log("i am called");
    this.key = key;
    //console.log(key + "passing data");
    //var JSONWorkHours = JSON.stringify(this.workHoursData);
    //JSONWorkHours = JSON.parse(JSONWorkHours);
    //console.log(JSONWorkHours[key]);

    //console.log(this.workHoursData + key)
    //this.dayEmitter.emit(JSONWorkHours[key])
    return this.workHoursData[key];
  }
  
  //add functionality to delete the current hour 
  deleteHours() {
  	//this.etabotAPI.delete_last_hour();
  	this.cardWasSelected = false; 	
  }
  ngOnInit() {
    // if (this.workHoursData == null) {
    //   this.dayKeys = null;
    // }
    // else {
      this.dayKeys = Object.keys(this.workHoursData);
      console.log(this.workHoursData);
      for (let key of this.dayKeys) {
        if (key == 'Time Zone') {
          console.log(this.workHoursData[key])
          
          this.timeZone.emit(this.workHoursData[key]);
      //   }
      // }
      //}
  	//console.log(this.workHoursData);
  }


}
}
  

}

export class WorkHours {
  constructor(public workHoursDay: string, public workHoursDays: Array<string>) {}
}
