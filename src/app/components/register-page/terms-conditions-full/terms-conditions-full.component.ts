import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-terms-conditions-full',
  templateUrl: './terms-conditions-full.component.html',
  styleUrls: ['./terms-conditions-full.component.css']
})
export class TermsConditionsFullComponent {

  constructor(
    public dialogRef: MatDialogRef<TermsConditionsFullComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  	//console.log("data " + data.isAcceptedTerms);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
