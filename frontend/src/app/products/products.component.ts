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

  
  prods : Product[] = [];
  product : Product;
 
  
  constructor(private myservice : MyserviceService) { 
     
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
    this.myservice.getProduct().subscribe(prod => { 
      this.prods.push(prod[0]["id"]);
    console.log(this.prods);
  })
   
  }
 
  

  
  ngOnInit(): void {
  }

  hello(){
    console.log('Hi there ');
    
    
  }

}
