export class Project {
    settings: any;
    project_json: any;
    scope_field_name: String;
    sprint_field_name: String;
    scope_ui_message: String;
    name: String;
    velocity: number;
    velocity_available = false;


    constructor(project_json: any) {
        this.parse_json(project_json);
        console.log('Project inited with settings: ' + this.settings +
            'project_json.velocities: ' + project_json.velocities +
            'velocity: ' +  this.velocity +
            'velocity_available ' + this.velocity_available);
    }

    parse_json(project_json: any) {
        this.project_json = project_json;
        this.settings = project_json.project_settings;
        this.name = project_json.name;
        if (project_json.velocities) {
            this.velocity = project_json.velocities.mean;
        }

        if (this.velocity) {
            this.velocity_available = true;
        }

        this.get_scope_field_name();
        this.get_sprint_field_name();

    }

  get_scope_field_name() {
      if (!! this.settings &&
          !! this.settings.scope_field_name_message &&
          !! this.settings.scope_field_name_message.scope_field_name) {
          this.scope_field_name = this.settings.scope_field_name_message.scope_field_name;
          this.scope_ui_message = this.settings.scope_field_name_message.ui_message;
      } else {
          this.scope_field_name = null;
          this.scope_ui_message = 'Could not find scope (storypoints) in your data. \
          If you do use it, please let us know at <a href="mailto:hello@etabot.ai">hello@etabot.ai</a> \
          so we can fix it. In a meantime, we assume each task has about the same scope.';
      }
      return this.scope_field_name;
  }

  get_sprint_field_name() {
      if (!! this.settings &&
          !! this.settings.sprint_field_name) {
          this.sprint_field_name = this.settings.sprint_field_name;
      } else {
          this.sprint_field_name = null;
      }
      return this.sprint_field_name;
  }

  get_deadlines_summary() {
      if (!! this.settings &&
          !! this.settings.deadlines &&
          !! this.settings.deadlines.summary_table) {
          return this.settings.deadlines.summary_table;
      } else {
          return '';
      }
  }

  get_html_report() {
       if (!! this.settings &&
          !! this.settings.report) {
          return this.settings.report.slice(605);
      } else {
          return 'No report available. Please click Update ETAs in the project card to generate report.';
      }
  }
}
