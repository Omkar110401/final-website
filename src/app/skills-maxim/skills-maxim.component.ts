import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-maxim',
  templateUrl: './skills-maxim.component.html',
  styleUrls: ['./skills-maxim.component.css']
})
export class SkillsMaximComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    // Change the background color of the root HTML element (e.g., <html>)
    this.renderer.setStyle(document.documentElement, 'background-color', 'whitesmoke');

    // Alternatively, you can change the background color of the body element:
    // this.renderer.setStyle(document.body, 'background-color', 'red');
  }
}
