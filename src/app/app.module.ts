import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillComponent } from './skill/skill.component';
import { InternshipComponent } from './internship/internship.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShortTimelineComponent } from './short-timeline/short-timeline.component';
import { SkillsMaximComponent } from './skills-maxim/skills-maxim.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    NavbarComponent,
    AboutMeComponent,
    SkillComponent,
    InternshipComponent,
    ContactMeComponent,
    EducationComponent,
    ProjectsComponent,
    HomeComponent,
    TimelineComponent,
    NotFoundComponent,
    ShortTimelineComponent,
    SkillsMaximComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
