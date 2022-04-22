import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public index:number=0;
  public name:string="";
  public count:number=0;

  constructor(private productService:ProductService,
              private router:Router,
              private route:ActivatedRoute) { 
              
              }

  ngOnInit(): void {
    this.index=this.route.snapshot.params['index'];
    const product=this.productService.get(this.index);
    this.name=product.name;
    this.count=product.count;
  }

  public update(){
    this.productService.update(this.index, this.name, this.count);
    this.router.navigate(["/"]);
  }

}
