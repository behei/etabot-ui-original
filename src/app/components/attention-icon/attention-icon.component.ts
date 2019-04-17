import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../project';

@Component({
  selector: 'app-attention-icon',
  templateUrl: './attention-icon.component.html',
  styleUrls: ['./attention-icon.component.css']
})
export class AttentionIconComponent implements OnInit {
  @Input() tms: any;
  @Input() project: Project;
  error_display: boolean;
  error_message: String;

  constructor() { }

  ngOnInit() {
    this.error_message = '';

    console.log('attention icon init with project: ' + this.project);
    this.error_display = false;

    if (this.tms && this.tms.connectivity_status.status === 'error') {
      this.error_display = true;
      this.error_message += 'Connectivity problem. ';
    }

    if (this.project && this.project.get_scope_field_name() === null) {
        console.log('scope field name: ' + this.project.get_scope_field_name());
        this.error_display = true;
        this.error_message += 'Scope data problem. ';
    }
  }

}
