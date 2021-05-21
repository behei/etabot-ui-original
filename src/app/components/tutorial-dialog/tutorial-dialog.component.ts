import { Component, NgModule, OnInit } from '@angular/core';
import { MatDialogActions, matDialogAnimations, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tutorial-dialog',
  templateUrl: './tutorial-dialog.component.html',
  styleUrls: ['./tutorial-dialog.component.css']
})

@NgModule({
  declarations: [
    MatDialogActions
  ]
})

export class TutorialDialogComponent implements OnInit {

  // tutorial_display = 'none';
  redirect_button_disabled = 'true';
  loading_bar_display = 'block';
  error_display = 'none';
  error_message = '';

  constructor(
      private dialogRef: MatDialogRef<TutorialDialogComponent>
    ) { }

  ngOnInit() {
  }

  showRedirect() {
    this.redirect_button_disabled = 'false';
  }

  hideLoadingBar() {
    this.loading_bar_display = 'none';
  }

  showError(error_message) {
    this.error_display = 'block'
    this.error_message = error_message;
  }

  close() {
    this.dialogRef.close('Staying on tms connect');
  }

  send() {
    this.dialogRef.close('Redirecting to projects.');
  }
}