import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  loading = true; // Variable to control the loading animation

  constructor(private widgetLoader: FeedbackService, private titleService: Title) {
    this.titleService.setTitle("Feedback Form")
  }

  ngOnInit() {
    // Add a delay before loading the script (e.g., 3 seconds delay)
    setTimeout(() => {
      this.loadScriptWithLoading();
    }, 4000); // Adjust the delay time in milliseconds as needed
  }

  loadScriptWithLoading() {
    this.widgetLoader.loadScript()
      .then(() => {
        // Script has loaded, hide the loading animation
        this.loading = false;
      })
      .catch(error => {
        console.error('Failed to load script:', error);
        // Handle the error if the script fails to load
      });
  }
}
