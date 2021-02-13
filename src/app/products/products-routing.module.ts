import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: ViewAllProductComponent },
  {path:'add-product',component:AddProductComponent},
  {path:'view-product/:id',component:ViewProductComponent},
  // {path:'list-product',component:ViewAllProductComponent},
  {path:'category/:id',component:ViewProductByCategoryComponent},
  {path:'search-date',component:ViewProductByDateComponent},
  {path:'delete-product',component: DeleteProductComponent},
  {path:'update-product/:id',component:UpdateProductComponent },
  {path:'cart/:id',component:CartComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
