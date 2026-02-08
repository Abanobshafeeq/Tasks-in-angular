import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userSource = new BehaviorSubject<any>(null);
  userData$ = this.userSource.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const savedData = localStorage.getItem('userProfileData');
      if (savedData) {
        this.userSource.next(JSON.parse(savedData));
      }
    }
  }

  updateData(data: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('userProfileData', JSON.stringify(data));
    }
    this.userSource.next(data);
  }

  getCurrentData() {
    return this.userSource.value;
  }
}