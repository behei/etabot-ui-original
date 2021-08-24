import { Component, OnInit, Input, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-project-summary',
  templateUrl: './project-summary.component.html',
  styleUrls: ['./project-summary.component.css']
})
export class ProjectSummaryComponent implements OnInit {

  @Input() project: any;
  @ViewChild('extraUserSelect') extraUserSelect: MatSelect;
  @ViewChild('userSelect') userSelect: ElementRef;
  keys: any[];
  fullReport: String;
  dueDatesSummary: Object;
  sprintSummary: Object;
  teamSummary: any[];
  summaryValues: {dueDate: Object, sprint: Object};

  constructor(
    private rd: Renderer2
  ) { }

  ngOnInit() {
    this.fullReport = this.project.settings.reports;
    this.dueDatesSummary = this.project.settings.hierarchical_report.due_dates_stats.counts;
    this.sprintSummary = this.project.settings.hierarchical_report.sprint_stats.counts;
    this.teamSummary = this.project.settings.hierarchical_report.children;

    this.teamSummary.forEach((member, i) => member.id = i);
    // console.log("TEAM", this.teamSummary);
    // console.log("PROJECT SUMMARY ", this.project.settings);
    // console.log("PROJECT ", this.project);
    // console.log("DUE DATE SUMMARY", this.dueDatesSummary);

    this.summaryValues = {
      dueDate: this.dueDatesSummary,
      sprint: this.sprintSummary,
    }
  }

  ngAfterViewInit() {
    this.userSelect.nativeElement.querySelectorAll('.user').forEach(element => {
      element.addEventListener('click', () => {
        if (element.classList.contains('selected-user')) {
          this.rd.removeClass(element, 'selected-user');
        } else {
          this.rd.addClass(element, 'selected-user');
        }
        this.updateCharts()
      });
    });
  }

  more() {
    console.log("DISPLAY SOME MORE INFO");
  }

  openSelect() {
    this.extraUserSelect.open()
  }

  selectUser(evt, target, child) {
    if (!evt.value.length) {
      this.rd.removeClass(target, 'selected-user');
    } else if (!target.classList.contains('selected-user')) {
      this.rd.addClass(target, 'selected-user');
    }
    this.updateCharts()
  }

  getSelectedUserIds() {
    let ids = []
    let elements = this.userSelect.nativeElement.querySelectorAll('.user')
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].classList.contains('selected-user')) {
        ids.push(parseInt(elements[i].getAttribute('value')))
      }
    }
    if (this.extraUserSelect) {
      elements = this.extraUserSelect.options.toArray()
  
      for (let i = 0; i < elements.length; i++) {
        if (elements[i].selected) {
          ids.push(elements[i].value);
        }
      }
    }

    return ids;
  }

  sumObjects(objs) {
    let sum = {}

    objs.forEach(user => {
      for (let [key, value] of Object.entries(user)) {
        if (sum[key]) {
          sum[key] += value
        } else {
          sum[key] = value
        }
      }
    })

    return sum
  }

  updateCharts() {
    let selectedIds = this.getSelectedUserIds()
    let selectedUsers = this.teamSummary.filter(user => selectedIds.includes(user.id))
    
    if (selectedUsers.length) {
      this.summaryValues = {
        dueDate: this.sumObjects(selectedUsers.map(user => user.due_dates_stats.counts)),
        sprint: this.sumObjects(selectedUsers.map(user => user.sprint_stats.counts))
      }
    } else {
      this.summaryValues = {
        dueDate: this.dueDatesSummary,
        sprint: this.sprintSummary,
      }
    }
  }
}

function compareNamesAlphabetical(name1: string, name2: string) {
  if (name1[0] > name2[0]) {
    return 1;
  } else if (name1[0] > name2[0]) {
    return -1;
  } else {
    if(name1.split(' ')[1][0] > name2.split(' ')[1][0]) {
      return 1;
    } 
    return -1;
  }
}