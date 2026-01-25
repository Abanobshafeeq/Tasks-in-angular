import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NestedModalService } from '../../shared/services/nested-modal.service';

@Component({
  selector: 'app-product-modal',
  standalone: true,
  imports: [],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.css',
})
export class ProductModalComponent {
  @Input() modalId: string = 'productModal';
  @Input() isEditing: boolean = false;
  @Input() productData: any = { name: '', price: null };

  @Output() onSave = new EventEmitter<any>();

  constructor(private modalService: NestedModalService) {}

  close() {
    this.modalService.close(this.modalId);
  }

  submit() {
    this.onSave.emit(this.productData); // نبعت البيانات للـ Parent
    this.close(); // نقفل المودال بعد الحفظ
  }
}
