import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-masonary-gallary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './masonary-gallary.component.html',
  styleUrl: './masonary-gallary.component.css'
})
export class MasonaryGallaryComponent {
  // مصفوفة ستحتوي على 100 رابط صورة
  images: string[] = [];

  constructor() {
    this.generateImages();
  }

  generateImages() {
    for (let i = 0; i < 100; i++) {
      // توليد ارتفاع عشوائي بين 200 و 500 بكسل لعمل تأثير التفاوت
      const randomHeight = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
      
      // استخدام خدمة Lorem Picsum للحصول على صور حقيقية
      const url = `https://picsum.photos/seed/${i}/300/${randomHeight}`;
      
      this.images.push(url);
    }
  }
}
