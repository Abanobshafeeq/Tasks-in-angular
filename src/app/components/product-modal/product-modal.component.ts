import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NestedModalService } from '../../shared/services/nested-modal.service';
import { Product } from '../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css',
})
export class ProductModalComponent {
  @Input() modalId: string = 'productModal';
  @Input() isEditing: boolean = false;
  @Input() productForm: Product = {
    id: 0,
    name: '',
    price: null,
    imageUrl: '',
  };

  @Output() save = new EventEmitter<Product>();

  constructor(private modalService: NestedModalService) {}

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.productForm.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit() {
    this.save.emit(this.productForm);
    this.closeModal();
  }

  closeModal() {
    this.modalService.close(this.modalId);
  }
}
