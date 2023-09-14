import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-skills-maxim',
  templateUrl: './skills-maxim.component.html',
  styleUrls: ['./skills-maxim.component.css']
})
export class SkillsMaximComponent implements OnInit{
  private previousNavigationTime: number=0;
  constructor(private renderer: Renderer2, private el: ElementRef, private router:Router) { }

  ngOnInit() {
    this.renderer.setStyle(document.documentElement, 'background-color', 'whitesmoke');
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
}
