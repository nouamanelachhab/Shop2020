import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  productstURL = "http://localhost:3000/products/";



  constructor(private httpClient : HttpClient) { }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.httpClient.get(this.productstURL).pipe(
      map(this.extractData)
    );
  }

  getProduct()
  {
    return this.httpClient.get(this.productstURL);
  }
}
