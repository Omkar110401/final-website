import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent {
  constructor(private el:ElementRef){}
  showButton = false;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Adjust this value to determine when to show/hide the button
    this.showButton = window.scrollY > 1000;
  }
  scrollToTop() {
    // Add a delay before scrolling to the top
    const delay = 1500; // Adjust the delay duration in milliseconds (e.g., 1000ms = 1 second)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, delay);
  }
}
