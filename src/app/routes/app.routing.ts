import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { ProjectsViewComponent } from '../components/users-view/projects-view/projects-view.component';
import { UsersViewComponent } from '../components/users-view/users-view.component';
import { RegisterPageComponent } from '../components/register-page/register-page.component';
import { VerificationPendingComponent } from '../components/register-page/verification-view/verification-pending/verification-pending.component';
import { VerificationActivateComponent } from '../components/register-page/verification-view/verification-activate/verification-activate.component';
// import { AboutViewComponent } from '../components/about-view/about-view.component';
// import { ContactViewComponent } from '../components/contact-view/contact-view.component';
import { JiraCredentialsComponent } from '../components/jira-credentials/jira-credentials.component';
// import { MobileWarningComponent } from '../components/mobile-warning/mobile-warning.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AuthGuard } from '../auth_guard/auth.guard';
import { NeedSignUpTokenComponent } from '../components/need-sign-up-token/need-sign-up-token.component';
import { JiraIssueCollectorComponent } from '../components/jira-issue-collector/jira-issue-collector.component';
import { TmsListComponent } from '../components/tms-list/tms-list.component';
import { TmsConnectComponent } from '../components/tms-connect/tms-connect.component';
import { ErrorPageComponent } from '../components/error-page/error-page.component';
import { TosppComponent } from '../components/tospp/tospp.component';



const appRoutes: Routes = [
  {
    path: 'intro',
    component: IntroductionComponent
  },
  {
    path: 'projects',
    canActivate: [AuthGuard],
    component: ProjectsViewComponent
  },
  {
    path: 'tmss',
    canActivate: [AuthGuard],
    component: TmsListComponent
  },
  {
    path: 'tms_connect',
    canActivate: [AuthGuard],
    component: TmsConnectComponent
  },
  {
    path: 'login',
    component: UsersViewComponent
  },
  {
    path: 'terms_of_service_privacy_policy',
    component: TosppComponent
  },
  {
    path: 'error_page',
    component: ErrorPageComponent
  },

  {
    path: 'signup/:token',
    component: RegisterPageComponent
  },
  {
    path: 'signup',
    component: RegisterPageComponent
  },

  {
    path: 'verification/pending',
    component: VerificationPendingComponent
  },
  {
    path: 'verification/activate/:token',
    component: VerificationActivateComponent
  },
  {
      path: 'need_sign_up_token',
      component: NeedSignUpTokenComponent
  },
  {
      path: 'issue_collector',
      component: JiraIssueCollectorComponent
  },
  // {
  //   path: 'about',
  //   component: AboutViewComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactViewComponent
  // },
  {
    path: 'jira',
    //canActivate: [AuthGuard],
    component: JiraCredentialsComponent
  },
  // {
  //   path: 'mobile',
  //   component: MobileWarningComponent
  // },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const routing = RouterModule.forRoot(
    appRoutes,
    {useHash: false, enableTracing: true});
