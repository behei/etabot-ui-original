import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, XSRFStrategy, CookieXSRFStrategy} from '@angular/http';

import { AppComponent } from './app.component';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { RouterModule } from '@angular/router';
import { routing } from './routes/app.routing';

import { AuthGuard} from './auth_guard/auth.guard';
import { AuthService } from './services/auth-service.service';
import { EtabotApiService } from './services/etabot-api.service';
import { SignUpService } from './services/sign-up.service';
import { JiraService } from './services/jira.service';

// import { materialExportModule } from './material-scheme/app.materialExportModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import {
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
} from '@angular/material';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { TermsConditionsFullComponent } from './components/register-page/terms-conditions-full/terms-conditions-full.component';
import { JiraCredentialsComponent } from './components/jira-credentials/jira-credentials.component';
import { ProjectsViewComponent } from './components/users-view/projects-view/projects-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersViewComponent,
    IntroductionComponent,
    PageNotFoundComponent,
    HeaderComponent,
    RegisterPageComponent,
    TermsConditionsFullComponent,
    JiraCredentialsComponent,
    ProjectsViewComponent
  ],
  entryComponents: [
    TermsConditionsFullComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,

    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,

    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule

    ],
  providers: [EtabotApiService, AuthService, SignUpService, AuthGuard, JiraService,
       {
            provide: XSRFStrategy,
            useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
       }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
