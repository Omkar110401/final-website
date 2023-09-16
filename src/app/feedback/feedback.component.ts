import { Component } from '@angular/core';
import { FeedbackService } from '../feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  constructor(private widgetLoader: FeedbackService) {}

  ngOnInit() {
    this.widgetLoader.loadScript();
  }
}