import { Component, HostListener } from '@angular/core';
import { PROJECTS } from './project-data';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects=PROJECTS;
  isScrolled4400=false
  isScrolled4600=false

  @HostListener('window:scroll', ['$event'])
  isScrolled(event: Event): void {
    this.isScrolled4400 = window.scrollY >= 4400;
    this.isScrolled4600 = window.scrollY >= 4600;
  }
}
