import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductItemComponent } from './components/products/product-item/product-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
