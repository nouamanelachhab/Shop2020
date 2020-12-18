import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import  {Product} from './interfaces/product'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  productstURL = "http://localhost:3000/products/";



  constructor(private httpClient : HttpClient) { }

  
  getProduct(productId)
  {
    return this.httpClient.get(this.productstURL);
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.productstURL);
  }

  addProduct(productName, productCategory, ProductPrice) {
    return this.httpClient.post(this.productstURL, { name: productName , category : productCategory ,price : ProductPrice })
  }


}
