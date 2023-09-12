import { Component, HostListener } from '@angular/core';
import { skills } from './skills-data';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  skills=skills;
  isScrolled1000=false;
  isScrolled1150 = false;
  isScrolled1200 =false
  isScrolled1250 =false
  isScrolled1300 =false
  isScrolled1350 =false
  isScrolled1400 =false

  // Add more flags for different scroll positions if needed

  @HostListener('window:scroll', ['$event'])
  isScrolled(event: Event): void {
    this.isScrolled1000 = window.scrollY >= 1000;
    this.isScrolled1150 = window.scrollY >= 1150;
    this.isScrolled1200 =window.scrollY>=1200;
    this.isScrolled1250 =window.scrollY>=1250;
    this.isScrolled1300 =window.scrollY>=1300;
    this.isScrolled1350 =window.scrollY>=1350;
    this.isScrolled1400 =window.scrollY>=1400;
    // Update other flags for different scroll positions if needed
  }
  //  isScrolled1200px = false;
  //  isScrolledUp=false;
  //  isScrolled1000px=false;
  // constructor(private renderer: Renderer2, private el: ElementRef) {
  //   // Other component initialization code
  // }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event): void {
  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
  //   if (scrollPosition >= 1200) {
  //     this.isScrolled1200px = true;
  //   } else {
  //     this.isScrolled1200px = false;
  //   }
  // }

  // @HostListener('window:scroll', ['$event'])
  // scrollUp(event:Event):void{
  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if(scrollPosition>=1000){this.isScrolledUp=true;}
  //   else{this.isScrolledUp=false;}
  // }

  // @HostListener('window:scroll', ['$event'])
  // scrolled1000px(event:Event):void{
  //   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if(scrollPosition>=500){this.isScrolledUp=true;}
  //   else{this.isScrolledUp=false;}
  // }
}
