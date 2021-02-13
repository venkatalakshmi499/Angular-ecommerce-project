import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [ProductsComponent,
     AddProductComponent,
      ViewProductComponent, 
      UpdateProductComponent, 
      DeleteProductComponent, 
      ViewAllProductComponent, 
      ViewProductByCategoryComponent,
       ViewProductByDateComponent,
       CartComponent
      ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class ProductsModule { }
