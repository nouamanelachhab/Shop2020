import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import{AppComponent} from '../app.component';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private myservice : MyserviceService) { 
   
  
  }

  onClickMe() {
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
    var z;
     this.myservice.getProduct().subscribe(product=>
       z =product
      );

    console.log(z);
   
  }
 
  

  
  ngOnInit(): void {
  }

  hello(){
    console.log('Hi there ');
    
    
  }

}
