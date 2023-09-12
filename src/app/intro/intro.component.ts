import { Component } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  scrollToAboutMe() {
    const element = document.getElementById('about-me');
    if (element) {
      if (window.scrollY !== 0) {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top first
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 500); // Wait for the scroll to top animation to finish
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
