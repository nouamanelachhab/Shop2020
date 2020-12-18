/// <reference types="node" />
import { ServerResponse } from 'http';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    addtoCart(prodId: string): string;
    showCart(): import("../products/product.model").Product[];
    updateCart(firstid: string, secondid: string): typeof ServerResponse;
    deleteProduct(prodId: string): typeof ServerResponse;
}
