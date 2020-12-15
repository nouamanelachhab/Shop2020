import { OrdersService } from './orders.service';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    addtoCart(prodId: string): {
        addedProduct: any;
    };
    showCart(): any;
}
