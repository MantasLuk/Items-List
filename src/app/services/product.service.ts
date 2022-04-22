import { EventEmitter, Injectable } from '@angular/core';
import { Product } from 'src/app/models/ProductModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products:Product[]=[];
  public onProductsChange=new EventEmitter();

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
  
  public add(name:string, count:number){
    this.products.push({
      name  : name,
      count : count
    });
    this.save();
    this.onProductsChange.emit();
  }

  public delete(index:number){
    this.products.splice(index,1);
    this.save();
    this.onProductsChange.emit();
  }

  public get(index:number){
    return this.products[index];
  }

  public update(index:number, name:string, count:number){
    this.products[index].name=name;
    this.products[index].count=count;
    this.save();
  }

  public getProductCount(){
    return this.products.length;
  }

}
