import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'product-showCase', component: ProductListComponent },
];
