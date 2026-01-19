import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  hoverImage?: string;
  badge?: { text: string; color: string };
  description: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  activeTab = 'Best Sellers';
  tabs = ['Best Sellers', 'Featured', 'Sales'];

  products: Product[] = [
    {
      id: 1,
      name: 'Wooden single drawer',
      category: 'Furniture',
      price: 249.00,
      oldPrice: 399.00,
      image: 'assets/images/p-sh/1-1.jpg',
      hoverImage: 'assets/images/p-sh/4-1.jpg',
      badge: { text: 'SALE', color: 'bg-success' },
      description: 'Placerat tempor dolor eu leo ullamcorper et magnis habitant ultrices consectetur.'
    },
    {
      id: 2,
      name: 'Smart watches wood edition',
      category: 'Accessories, Clocks',
      price: 599.00,
      image: 'assets/images/p-sh/2-1.jpg',
      hoverImage: 'assets/images/p-sh/3-1.jpg',
      description: 'Unique wooden design smart watch with advanced features and long battery life.'
    },
    {
      id: 3,
      name: 'Panton tunior chair',
      category: 'Furniture',
      price: 199.00,
      image: 'assets/images/p-sh/3-1.jpg',
      hoverImage: 'assets/images/p-sh/2-1.jpg',
      badge: { text: 'NEW', color: 'bg-success' },
      description: 'Comfortable and stylish chair for modern homes, made from recycled wood.'
    },
    {
      id: 4,
      name: 'Decoration wooden present',
      category: 'Accessories',
      price: 89.00,
      image: 'assets/images/p-sh/4-1.jpg',
      hoverImage: 'assets/images/p-sh/1-1.jpg',
      description: 'Handcrafted wooden decoration item perfect for gifts and living rooms.'
    },
    {
      id: 5,
      name: 'Minimalist Wooden Lamp',
      category: 'Lighting',
      price: 120.00,
      image: 'assets/images/p-sh/5-1.jpg',
      hoverImage: 'assets/images/p-sh/8-1.jpg',
      description: 'Soft lighting for a cozy atmosphere with natural wood finish.'
    },
    {
      id: 6,
      name: 'Bento Grid Table iphone',
      category: 'Furniture',
      price: 450.00,
      oldPrice: 600.00,
      image: 'assets/images/p-sh/6-1.jpg',
      hoverImage: 'assets/images/p-sh/7-1.jpg',
      badge: { text: '-25%', color: 'bg-danger' },
      description: 'Modern coffee table with plenty of storage space.'
    },
    {
      id: 7,
      name: 'Bamboo Cutlery Set',
      category: 'Kitchen',
      price: 35.00,
      image: 'assets/images/p-sh/7-1.jpg',
      hoverImage: 'assets/images/p-sh/6-1.jpg',
      description: 'Eco-friendly bamboo cutlery set, durable and lightweight.'
    },
    {
      id: 8,
      name: 'Wooden Phone Stand',
      category: 'Accessories',
      price: 25.00,
      image: 'assets/images/p-sh/8-1.jpg',
      hoverImage: 'assets/images/p-sh/5-1.jpg',
      badge: { text: 'HOT', color: 'bg-warning' },
      description: 'Keep your desk organized with this elegant phone stand.'
    }
  ];

  get filteredProducts(): Product[] {
    const list = [...this.products];
    if (this.activeTab === 'Featured') {
      return list.reverse();
    } else if (this.activeTab === 'Sales') {
      return list.sort((a, b) => (b.oldPrice ? 1 : -1));
    }
    return this.products;
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}