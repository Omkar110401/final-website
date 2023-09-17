import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private scriptLoaded = false;

  loadScript() {
    return new Promise<void>((resolve, reject) => {
      if (!this.scriptLoaded) {
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.defer = true;
        script.setAttribute('data-use-service-core', '');

        script.onload = () => {
          this.scriptLoaded = true;
          resolve();
        };

        script.onerror = () => {
          reject(new Error('Failed to load script'));
        };

        document.body.appendChild(script);
      } else {
        resolve();
      }
    });
  }
}
