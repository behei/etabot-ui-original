import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { materialExportModule } from './material-scheme/app.materialExportModule';

import {  
  FormsModule,  
  ReactiveFormsModule  
} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { ContentComponentComponent } from './components/content-component/content-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { ProjectsViewComponent } from './components/users-view/projects-view/projects-view.component';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { AboutViewComponent } from './components/about-view/about-view.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { WorkHoursViewComponent } from './components/users-view/projects-view/work-hours-view/work-hours-view.component';
import { WorkHourCardComponent } from './components/users-view/projects-view/work-hours-view/work-hour-card/work-hour-card.component';
import { AdvancedSettingsComponent } from './components/users-view/projects-view/advanced-settings/advanced-settings.component';
import { VacationsComponent } from './components/users-view/projects-view/vacations/vacations.component';
import { AuthGuard} from './auth_guard/auth.guard';
import { AuthService } from './services/auth-service.service';
import { EtabotApiService } from './services/etabot-api.service';
import { SignUpService } from './services/sign-up.service';
import { JiraService } from './services/jira.service';
import { routing } from './routes/app.routing';
import { VacationBlockComponent } from './components/users-view/projects-view/vacations/vacation-block/vacation-block.component';
import { VacationBlockEndComponent } from './components/users-view/projects-view/vacations/vacation-block-end/vacation-block-end.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RouterModule } from '@angular/router';
import { JiraCredentialsComponent } from './components/jira-credentials/jira-credentials.component';
import { WorkHourStartComponent } from './components/users-view/projects-view/work-hours-view/work-hour-card/work-hour-start/work-hour-start.component';
import { TermsConditionsFullComponent } from './components/register-page/terms-conditions-full/terms-conditions-full.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { MobileWarningComponent } from './components/mobile-warning/mobile-warning.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    ContentComponentComponent,
    FooterComponentComponent,
    ProjectsViewComponent,
    UsersViewComponent,
    IntroductionComponent,
    AboutViewComponent,
    ContactViewComponent,
    WorkHoursViewComponent,
    WorkHourCardComponent,
    AdvancedSettingsComponent,
    VacationsComponent,
    VacationBlockComponent,
    VacationBlockEndComponent,
    RegisterPageComponent,
    JiraCredentialsComponent,
    WorkHourStartComponent,
    TermsConditionsFullComponent,
    MobileWarningComponent,
  ],
  entryComponents: [
    TermsConditionsFullComponent,
  ],
  imports: [
    BrowserModule,
    materialExportModule,
    HttpModule,
    routing,
    FormsModule,  
    ReactiveFormsModule,
    FlexLayoutModule,
    DeviceDetectorModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [EtabotApiService, AuthService, SignUpService, AuthGuard, WorkHoursViewComponent, JiraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
