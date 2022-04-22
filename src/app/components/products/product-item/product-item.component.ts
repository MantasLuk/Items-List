import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() public product:Product = {name: "", count: 0};
  @Input() public index:number = 0;
  
  constructor(private productService:ProductService) { 
  }

  ngOnInit(): void {
  }

  public deleteItem(){
    this.productService.delete(this.index);
  }

}
