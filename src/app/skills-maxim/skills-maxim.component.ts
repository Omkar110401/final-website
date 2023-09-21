import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { skillsData } from './skill-maxim-data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills-maxim',
  templateUrl: './skills-maxim.component.html',
  styleUrls: ['./skills-maxim.component.css']
})
export class SkillsMaximComponent implements OnInit{
  skillsData=skillsData;
  private previousNavigationTime: number=0;
  constructor(private renderer: Renderer2, private el: ElementRef, private router:Router, private titleService: Title) {
    this.titleService.setTitle("Omkar's Skills");
    this.renderer.setStyle(document.body, 'background-color', 'white');
   }

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
