import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  productstURL = "http://localhost:3000/products/";



  constructor(private httpClient : HttpClient) { }

  getProduct()
  {
    return this.httpClient.get(this.productstURL);
  }
}
