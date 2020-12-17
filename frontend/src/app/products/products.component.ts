import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import{AppComponent} from '../app.component';
import { Product } from '../interfaces/product';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  
  prods : JSON[] = [];

  productList : Product[];
  product : Product;
  totalproducts : Object;
  
  
  constructor(private myservice : MyserviceService) { 
     
  }

  loadProducts() {
    this.myservice.getProducts().subscribe((products) => {
      this.productList = products;
    })
   
  }
  
  onClickMe()  {
   /* var ProductName = prompt("Name? ");
    var ProductCategory = prompt("Category? ");
    var ProductPrice =parseInt( prompt("Price ? "),10);

    

    if(ProductPrice <= 0) 
    {
      alert("Invalid price : \n "+ProductPrice);
    }

    else
    {
      if(!ProductName || !ProductCategory)
      {
        alert("Error : \n "+ProductPrice);
      }
      
      else
      {
      console.log('name :'+ProductName + '\n category : ' +ProductCategory + '\n price : ' +ProductPrice);
      }
    }*/
   
    for(var i = 0; i<this.productList.length; i++)
    {
        console.log("nom : " + this.productList[i]["name"] );
    }
   
  }

  // loop 
  /*  for(var i = 0; i<this.productList.length; i++)
    {
        console.log("nom : " + this.productList[i]["name"] );
    }
    */ 
 
  
 
  ngOnInit(): void {
  this.loadProducts();
  }

  hello(){
    console.log('Hi there ');
    
    
  }

}
