import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {

  @Input() project: Object;
  keys: any[];
  dueDatesSummary: Object;
  sprintSummary: Object;

  constructor() { }

  ngOnInit() {
    // this.keys = Object.keys(this.project);
    this.dueDatesSummary = this.project.settings.hierarchical_report.due_dates_stats.counts;
    this.sprintSummary = this.project.settings.hierarchical_report.sprint_stats.counts;
    console.log("PROJECT SUMMARY ", this.project.settings.hierarchical_report);

  }

  more() {
    console.log("DISPLAY SOME MORE")
  }

}
