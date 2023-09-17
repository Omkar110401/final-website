import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingServiceService } from './loading-service.service';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website-1-sept';
  // constructor(private router: Router, public loadingService: LoadingServiceService) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       // Hide loading animation after navigation is complete
  //       this.loadingService.hideLoading();
  //     }
  //   });
  // }

  loader = true;
  ngOnInit(): void {
    setTimeout(() => {
      this.loader=false;
    }, 3000);
  }
}
