import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { isNumber } from 'util';
import{AppComponent} from '../app.component';
import { Product } from '../interfaces/product';
import { MyserviceService } from '../myservice.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  closeResult = '';
  
  productList : Product[];
  product : Product;
  sproduct : Product[] = [];

  productCategories : String[] = ["TV","Smartphone" ,"Tablet","Watch","Headphone","Laptop"];
  totalproducts : Object;
  
  olds : string = "";
  
  constructor(private myservice : MyserviceService,private modalService: NgbModal) { 
     
  }


  

  loadProducts() {
    this.productList = [];
    this.myservice.getProducts().subscribe((products) => {
      this.productList = products;
    })
  }

  //show product image by category 
  productImage(Cat)
  {
    return "../../assets/img/" + Cat +".png";
  }




  deleteProduct(productId) {

    if(confirm("Are you sure ?").valueOf())
    {
    this.myservice.deleteProduct(productId).subscribe();
 
     console.log(productId);
     window.alert("Product deleted");
     
     this.loadProducts();
    }

    else
    {
    window.alert("Product not deleted");
     
     this.loadProducts();
    }
  }


serchproduct(name)
  {
  

  } 


  addProduct(productN : string, productC : string, productP){
    this.loadProducts();
    if(!productN || !productC || !productP)
    {
      window.alert("Error ! \n Product is not added");
    }
    else
    {
    this.myservice.addProduct(productN,productC,productP).subscribe();
    window.alert("Product : "+ productN + " added successfully.");
    }
    this.loadProducts();
  }
  

  updateProduct(productID:string ,productN : string, productC : string, productP)
    {
      this.loadProducts();
      if(!productN || !productC || !productP)
      {
        window.alert("Error ! \n Product is not added");
      }
      else
      {
      this.myservice.updateProduct(productID,productN,productC,productP).subscribe();
      window.alert("Product : "+ productN + " Updated Successfully.");
      }
      this.loadProducts();
    }
  onClickAdd(){

    
    this.loadProducts();
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




  //Modal

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {  this.closeResult = `Closed with: ${result}`;
    });
  }



  

  


}
