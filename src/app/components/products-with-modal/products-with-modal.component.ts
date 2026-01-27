import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NestedModalService } from '../../shared/services/nested-modal.service';
import { ProductModalComponent } from '../product-modal/product-modal.component';
import { Product } from '../../shared/models/product.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products-with-modal',
  standalone: true,
  imports: [ProductModalComponent, CommonModule],
  templateUrl: './products-with-modal.component.html',
  styleUrl: './products-with-modal.component.css',
})
export class ProductsWithModalComponent {
  products: Product[] = [];
  isEditing = false;
  selectedProduct: Product = { id: 0, name: '', price: null, imageUrl: '' };

  constructor(private modalService: NestedModalService) {}

  openAddModal() {
    this.isEditing = false;
    this.selectedProduct = { id: 0, name: '', price: 0, imageUrl: '' };
    this.modalService.open('pModal');
  }

  onEdit(product: Product) {
    this.isEditing = true;
    this.selectedProduct = { ...product };
    this.modalService.open('pModal');
  }

  handleSave(productData: Product) {
    if (this.isEditing) {
      const index = this.products.findIndex((p) => p.id === productData.id);
      if (index !== -1) this.products[index] = { ...productData };
    } else {
      const newId =
        this.products.length > 0
          ? Math.max(...this.products.map((p) => p.id)) + 1
          : 1;
      this.products.push({ ...productData, id: newId });
    }
  }

  onDelete(id: number) {
    if (confirm('Are you Sure ?')) {
      this.products = this.products.filter((p) => p.id !== id);
    }
  }
}
