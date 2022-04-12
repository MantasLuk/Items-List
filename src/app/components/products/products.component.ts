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
    productService.load();
    this.products = productService.products
  }

  ngOnInit(): void {
  }

  public addNewItem(name:HTMLInputElement, count:HTMLInputElement){
    if(name.value != ""){
      this.products.push({
        name: name.value,
        count: count.valueAsNumber
      });
      name.value = '';
      count.value = '';
      this.productService.save();
    }
  }
}
