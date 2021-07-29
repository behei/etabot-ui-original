import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {

  @Input() project: Object;
  keys: any[];
  summary: Object;

  constructor() { }

  ngOnInit() {
    console.log("PROJECT SUMMARY ", this.project);
    // this.keys = Object.keys(this.project);
    this.summary = this.project.settings.hierarchical_report.sprint_stats.counts
  }

}
