import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent {
  isScrolled2450=false
  isScrolled2500=false
  isScrolled2700=false
  isScrolled2750=false
  isScrolled3000=false
  isScrolled3050=false

  @HostListener('window:scroll', ['$event'])
  isScrolled(event: Event): void {
    this.isScrolled2450 = window.scrollY >= 2450;
    this.isScrolled2500 = window.scrollY >= 2500;
    this.isScrolled2700 = window.scrollY >= 2700;
    this.isScrolled2750 = window.scrollY >= 2750;
    this.isScrolled3000 = window.scrollY >= 3000;
    this.isScrolled3050 = window.scrollY >= 3050;
  }
}
