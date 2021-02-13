import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import{Category} from 'src/app/site-layout/category';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-view-product-by-category',
  templateUrl: './view-product-by-category.component.html',
  styleUrls: ['./view-product-by-category.component.css']
})
export class ViewProductByCategoryComponent implements OnInit {
  productList: Product |any ;
  searchCategory:Category |any;

  constructor(private activateRoute:ActivatedRoute,private productService:ProductService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data=>{
      this.searchCategory=data.id;
    
      this.productService.searchCategoryProduct(this.searchCategory).subscribe(categoryData=> {
      this.productList=categoryData;
     
    })
    });
  }

}
