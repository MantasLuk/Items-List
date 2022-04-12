import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products:Product[]=[];
  constructor() { }


  public load(){
    let data = localStorage.getItem("products");
    if(data != null){
      this.products = JSON.parse(data);
    }
  }

  public save(){
    localStorage.setItem("products", JSON.stringify(this.products));
  }

  
}
