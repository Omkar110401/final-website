import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  @ViewChild('text', { static: true }) textElement!: ElementRef;
  @ViewChild('cursor', { static: true }) cursorElement!: ElementRef;

  private textContent = "Data Analysis, Machine Learning & Deep Learning.";
  private currentIndex = 0;
  private typingComplete = false;
  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.typeText();
    }, 2000); // Add a 2-second delay (adjust as needed)
  }

  typeText() {
    if (this.currentIndex <= this.textContent.length) {
      const currentText = this.textContent.slice(0, this.currentIndex);
      this.textElement.nativeElement.textContent = currentText;
      this.currentIndex++;
  
      // Update the cursor's position
      this.cursorElement.nativeElement.style.left = `${currentText.length * 12}px`; // Adjust the spacing
  
      setTimeout(() => {
        this.typeText();
      }, 500); // Adjust typing speed (milliseconds)
    } else {
      this.cursorElement.nativeElement.style.display = 'none';
      this.typingComplete = true; // Set the typing status to complete
    }
  }
}
