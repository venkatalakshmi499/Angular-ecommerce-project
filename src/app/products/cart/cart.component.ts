import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productId=0;
  productData:Product|any;

  constructor(private activateRoute:ActivatedRoute,private productService:ProductService ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{
      this.productId=data.id;
    })
    this.productService.viewProduct(this.productId).subscribe(viewData=>{
      this.productData=viewData;
    });
    

}
}
