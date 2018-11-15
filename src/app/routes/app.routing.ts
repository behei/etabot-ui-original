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
    path: 'login',
    component: UsersViewComponent
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
    redirectTo: '/intro',
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
