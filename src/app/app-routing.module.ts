import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FooterComponent } from './footer/footer.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SkillsMaximComponent } from './skills-maxim/skills-maxim.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about-me',
    component: AboutMeComponent
  },
  {
    path:'contact-me',
    component:FooterComponent
  },
  {
    path:'timeline',
    component:TimelineComponent
  },
  {
    path:'skillMaxim',
    component:SkillsMaximComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'certificates',
    component:CertificatesComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled" }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
