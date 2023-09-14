import { Component, HostListener } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  private previousNavigationTime: number=0;
  items: NodeListOf<Element> = document.querySelectorAll(".timeline li");

  constructor(private titleService:Title, private router: Router) {
    this.titleService.setTitle("Omkar's Timeline");
  }

  ngOnInit() {
    this.items = document.querySelectorAll(".timeline li");
    this.checkElementsInView();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Get the current navigation time
        const currentNavigationTime = performance.now();
        if (this.previousNavigationTime && currentNavigationTime - this.previousNavigationTime < 100) {
          this.router.navigate(['']);
        }
        this.previousNavigationTime = currentNavigationTime;
      }
    });
  }

  @HostListener("window:scroll", ["$event"])
  onScroll() {
    this.checkElementsInView();
  }

  checkElementsInView() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.isElementInViewport(this.items[i])) {
        this.items[i].classList.add("in-view");
      }
    }
  }

  isElementInViewport(el: Element) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
}
