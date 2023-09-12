import { Component, HostListener } from '@angular/core';
import { EDUCATION } from './education-data';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education=EDUCATION;
  isScrolled3600=false
  isScrolled3800=false

  @HostListener('window:scroll', ['$event'])
  isScrolled(event: Event): void {
    this.isScrolled3600 = window.scrollY >= 3600;
    this.isScrolled3800 = window.scrollY >= 3800;
  }
}
