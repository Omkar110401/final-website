import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor() { }
  private scriptLoaded = false;

  loadScript() {
    if (!this.scriptLoaded) {
      const script = document.createElement('script');
      script.src = 'https://static.elfsight.com/platform/platform.js';
      script.defer = true;
      script.setAttribute('data-use-service-core', '');

      document.body.appendChild(script);
      this.scriptLoaded = true;
    }
  }
}
