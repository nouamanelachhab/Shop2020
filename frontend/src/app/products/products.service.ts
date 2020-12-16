import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  userURL = "https://randomuser.me/api/?results=50";
  constructor(private httpClient: HttpClient) { }
  getUsers()
  {
    return this.httpClient.get(this.userURL);
  }


}
