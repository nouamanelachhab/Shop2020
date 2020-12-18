import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import {HttpClientModule} from '@angular/common/http';
import {CurrencyPipe} from '@angular/common';
import { NgxCurrencyModule } from "ngx-currency";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true
};


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
      ],
    providers : [CurrencyPipe]
})
export class ProductsModule { }
