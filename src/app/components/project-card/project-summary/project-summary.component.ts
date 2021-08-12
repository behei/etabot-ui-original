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
  team: any[];

  constructor(
    private rd: Renderer2
  ) { }

  ngOnInit() {
    // this.keys = Object.keys(this.project);
    this.fullReport = this.project.settings.reports
    this.dueDatesSummary = this.project.settings.hierarchical_report.due_dates_stats.counts;
    this.sprintSummary = this.project.settings.hierarchical_report.sprint_stats.counts;
    this.team = [
      {
        name: 'Chad Lewis',
      },
      {
        name: 'Alex Radnaev',
        avatar: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:5e8ff89e-5f83-48cd-b787-fd0bd83ce3c2/eb3fdfb5-0e51-4995-9d7a-11df45e07e5b/48'
      },
      {
        name: 'Zach Elkins',
        avatar: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/604192c2c58c7200714eeda8/c5495077-983e-45fd-99cf-23a860fefe50/48'
      },
      {
        name: 'Chad Lewis',
      },
      {
        name: 'Alex Radnaev',
        avatar: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:5e8ff89e-5f83-48cd-b787-fd0bd83ce3c2/eb3fdfb5-0e51-4995-9d7a-11df45e07e5b/48'
      },
      {
        name: 'Zach Elkins',
        avatar: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/604192c2c58c7200714eeda8/c5495077-983e-45fd-99cf-23a860fefe50/48'
      },
      {
        name: 'Chad Lewis',
      },
      {
        name: 'Alex Radnaev',
        avatar: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:5e8ff89e-5f83-48cd-b787-fd0bd83ce3c2/eb3fdfb5-0e51-4995-9d7a-11df45e07e5b/48'
      },
      {
        name: 'Zach Elkins',
        avatar: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/604192c2c58c7200714eeda8/c5495077-983e-45fd-99cf-23a860fefe50/48'
      },
      {
        name: 'Chad Lewis',
      },
      {
        name: 'Alex Radnaev',
        avatar: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/557058:5e8ff89e-5f83-48cd-b787-fd0bd83ce3c2/eb3fdfb5-0e51-4995-9d7a-11df45e07e5b/48'
      },
      {
        name: 'Zach Elkins',
        avatar: 'https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/604192c2c58c7200714eeda8/c5495077-983e-45fd-99cf-23a860fefe50/48'
      }
    ];

    // this.team = this.team.sort((a, b) => {
    //   return compareNamesAlphabetical(a.name, b.name);
    // });

    console.log("TEAM", this.team);
    console.log("PROJECT SUMMARY ", this.project.settings);
  }

  ngAfterViewInit() {
    this.userSelect.nativeElement.querySelectorAll('.user').forEach(element => {
      element.addEventListener('click', () => {
        if (element.classList.contains('selected-user')) {
          this.rd.removeClass(element, 'selected-user');
        } else {
          this.rd.addClass(element, 'selected-user');
        }
      });
    });
  }

  more() {
    console.log("DISPLAY SOME MORE")
  }

  openSelect() {
    this.extraUserSelect.open()
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