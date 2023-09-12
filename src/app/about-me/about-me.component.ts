import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  isScrolled300 =false
  isScrolled400=false;
  isScrolled450=false;
  @HostListener('window:scroll', ['$event'])
  isScrolled(event: Event): void {
    this.isScrolled300 = window.scrollY >= 300;
    this.isScrolled400=window.scrollY>=400;
    this.isScrolled450=window.scrollY>=450;
  }
}
