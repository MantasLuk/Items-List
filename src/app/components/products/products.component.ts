import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products:Product[]=[];

  constructor(private productService:ProductService) { 
    this.products=productService.products;
  }

  ngOnInit(): void {  }

}
