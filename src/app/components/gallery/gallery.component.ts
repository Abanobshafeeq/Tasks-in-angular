import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent {
  badgeText = 'ABOUT US';
  headline = 'Most Powerful Way To Connect Every Audience';
  description = 'Since 2004, our technology has helped customers all over the world harness the incredible power of video - we even won two Technology';
  galleryItems: any[] = [
    {
      type: 'image',
      src: 'assets/images/gallery/image.png',
      cols: 1,
      rows: 2,
      badge: '',
    },
    {
      type: 'video',
      src: 'assets/images/gallery/v2.mp4',
      cols: 2,
      rows: 1,
      badge: 'Tutorials',
      badgeClass: 'neon',
    },
    {
      type: 'image',
      src: 'assets/images/gallery/3.jpg',
      cols: 1,
      rows: 1,
      badge: 'LIVE',
      badgeClass: 'live',
    },
    {
      type: 'video',
      src: 'assets/images/gallery/v3.mp4',
      cols: 1,
      rows: 1,
      badge: '',
    },
    {
      type: 'image',
      src: 'assets/images/gallery/4.jpg',
      cols: 1,
      rows: 1,
      overlayText: '20+ Customers',
    },
    {
      type: 'video',
      src: 'assets/images/gallery/v4.mp4',
      cols: 1,
      rows: 1,
      badge: 'Product View',
    },
  ];
}
