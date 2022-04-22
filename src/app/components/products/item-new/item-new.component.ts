import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-item-new',
  templateUrl: './item-new.component.html',
  styleUrls: ['./item-new.component.css']
})
export class ItemNewComponent implements OnInit {

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

  public addNewItem(name:HTMLInputElement, count:HTMLInputElement){
    if(name.value != ""){
      this.productService.add(name.value,count.valueAsNumber);
      name.value = '';
      count.value = '';
      this.router.navigate(["/"])
    }
  }
}
