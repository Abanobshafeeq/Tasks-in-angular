import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var bootstrap: any;

@Injectable({
  providedIn: 'root'
})
export class NestedModalService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  open(id: string , hasBackdrop: boolean = true) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const modalInstance = bootstrap.Modal.getOrCreateInstance(el, { 
            // lw fii kza 8alfia el afdel false 
            // backdrop: false  

            // lw 3iz 8alfia 
             backdrop: hasBackdrop  
          });
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