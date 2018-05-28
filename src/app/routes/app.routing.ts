import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from '../components/introduction/introduction.component';
import { ProjectsViewComponent } from '../components/users-view/projects-view/projects-view.component';
import { UsersViewComponent } from '../components/users-view/users-view.component';
import { AboutViewComponent } from '../components/about-view/about-view.component';
import { ContactViewComponent } from '../components/contact-view/contact-view.component';
import { JiraCredentialsComponent } from '../components/jira-credentials/jira-credentials.component';
import { MobileWarningComponent } from '../components/mobile-warning/mobile-warning.component';
import { AuthGuard } from '../auth_guard/auth.guard';


const appRoutes: Routes = [
  { 
    path: '', 
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
    path: 'about',
    component: AboutViewComponent
  },
  {
    path: 'contact',
    component: ContactViewComponent
  },
  {
    path: 'jira',
    canActivate: [AuthGuard],
    component: JiraCredentialsComponent
  },
  {
    path: 'mobile',
    component: MobileWarningComponent
  },
  {
  	path: '**',
  	redirectTo: ''
  }
];

export const routing = RouterModule.forRoot(appRoutes);