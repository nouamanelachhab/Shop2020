import { Module } from '@nestjs/common';
import {OrdersController} from './orders.controller';
import {OrdersService} from './orders.service';

import { ProductsModule } from '../products/products.module';
import { ProductsService } from 'src/products/products.service';


@Module({
    imports: [ProductsModule],
    controllers : [OrdersController],
    providers : [OrdersService]
})
export class OrdersModule {}