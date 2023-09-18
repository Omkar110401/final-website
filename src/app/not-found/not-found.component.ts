import { Component, ElementRef, AfterViewInit, Renderer2} from '@angular/core';
import * as Parallax from 'parallax-js';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements AfterViewInit{
  private scene!: HTMLElement;
  private parallax!: Parallax;

  constructor(private elementRef: ElementRef, private renderer:Renderer2) {}
  ngOnInit(){
    this.renderer.setStyle(document.body, 'background-color', 'purple');
  }
  ngAfterViewInit() {
    
    // Find the scene element within the component's view
    this.scene = this.elementRef.nativeElement.querySelector('#scene');

    // Initialize Parallax after the view has been initialized
    if (this.scene) {
      this.parallax = new Parallax(this.scene);
    }
  }
}
