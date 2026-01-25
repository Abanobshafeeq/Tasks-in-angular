import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class NestedModalService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  open(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const modalInstance = bootstrap.Modal.getOrCreateInstance(el, { backdrop: false });
          modalInstance.show();
        }
      }, 0);
    }
  }

  close(id: string) {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(id);
      if (el) {
        const modalInstance = bootstrap.Modal.getInstance(el);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
    }
  }
}