import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { EtabotApiService } from 'src/app/services/etabot-api.service';

@NgModule({
  declarations: [
    MatDialogActions
  ]
})
@Component({
  selector: 'app-feedback-dialog',
  templateUrl: './feedback-dialog.component.html',
  styleUrls: ['./feedback-dialog.component.css']
})
export class FeedbackDialogComponent implements OnInit {

  form: FormGroup;
  error_messages: String[];

  topics: String[] = [
    'UI',
    'Reports',
    'Errors & Bugs',
    'General Feedback'
  ];


  constructor(
      private fb: FormBuilder, 
      private dialogRef: MatDialogRef<FeedbackDialogComponent>,
      private etabot_api_service: EtabotApiService
    ) { }

  ngOnInit() {
    this.form = this.fb.group( {
      topic: new FormControl('', [
        Validators.required
      ]),
      subject: new FormControl('', [
        Validators.required
      ]),
      body: new FormControl('', [
        Validators.required
      ])
    });
  }

  get topic() {
    return this.form.get('topic');
  }
  get subject() {
    return this.form.get('subject');
  }
  get body() {
    return this.form.get('body');
  }

  sendFeedback(topic, subject, body) {
    const data = {
      'subject' : `${topic.value} Feedback | ${subject.value}`,
      'body'    : body.value,
      'send_confirmation': true
    };
    
    this.etabot_api_service.userCommunication(data).subscribe(
      res => {
        console.log("Feedback sent");
      }
    );
  }

  send() {
    this.error_messages = [];

    if (this.topic.invalid) {
      this.error_messages.push("Topic is empty.");
    }
    if (this.subject.invalid) {
      this.error_messages.push("Subject is empty.");
    }
    if (this.body.invalid) {
      this.error_messages.push("Body is empty.");
    }
    if (this.error_messages.length == 0) {
      this.dialogRef.close(this.form.value); 
    }
    
    this.sendFeedback(this.topic, this.subject, this.body);
  }

  close() {
    this.dialogRef.close();
  }
}
