import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    component:ContactMeComponent
  },
  {
    path:'timeline',
    component:TimelineComponent
  },
  {
    path:'timeline/home',
    component:HomeComponent
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
