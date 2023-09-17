import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {

  constructor() { }
  isLoading = false;

  showLoading() {
    this.isLoading = true;
  }

  hideLoading() {
    this.isLoading = false;
  }
}
