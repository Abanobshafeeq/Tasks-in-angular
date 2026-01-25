import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from '../../shared/models/product.model';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule ,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [
    // { id: 1, name: 'Modern Office Chair', price: 1200, imageUrl: 'https://placehold.co/50/png' },
    // { id: 2, name: 'Wooden Desk', price: 2500, imageUrl: 'https://placehold.co/50/png' }
  ];

  // object for form 
  productForm: Product = {
    id : 0 ,
    name : '' ,
    price : 0 ,
    imageUrl : '' ,
  };

  //flag for editing 
  isEditing : boolean = false ;

  //tafdit el form 
  resetForm (){
    this.isEditing =false ;
    this.productForm ={id:0 , name : '' , price :0 , imageUrl : ''} ;
  }
  onSubmit(){
    if(this.isEditing){
      const index =this.products.findIndex(p=> p.id === this.productForm.id) ;
      
      if(index != -1){
        //3lsahn ubdate 
        this.products[index] = {...this.productForm}
      }
      this.isEditing =false ;
    }else{
      const newId = this.products.length > 0 ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
      this.products.push({ ...this.productForm, id: newId });
    }
    this.resetForm();
  }

  onEdit (product : Product){
    this.isEditing =true ;
    // nos8a mnho 3lshan n3dl 3liha
    this.productForm = {...product};
  }

  onDelete(id: number) {
    if(confirm('Are you sure you want to delete this item?')) {
      this.products = this.products.filter(p => p.id !== id);
    }
  }

  onFileSelected(event: any) {
  const file = event.target.files[0];
  if (file && file.type.startsWith('image/')) { 
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.productForm.imageUrl = e.target.result; 
    };
    reader.readAsDataURL(file);
  } else {
    alert("Please select a valid image file");
  }
}
}
