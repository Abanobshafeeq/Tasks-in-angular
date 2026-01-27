import { Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsWithModalComponent } from './components/products-with-modal/products-with-modal.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'form', component: FormComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'product-showCase', component: ProductListComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path : 'add-new-product' , component : ProductsComponent} ,
  {path : 'add-new-product-with-modal' , component : ProductsWithModalComponent},

  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];
