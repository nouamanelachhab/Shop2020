import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{AppComponent} from '../app.component'
import { ProductsService } from './products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { 
  
  }
 
  

  
  ngOnInit(): void {
  }

  hello(){
    console.log('Hi there ');
    
    
  }

}
