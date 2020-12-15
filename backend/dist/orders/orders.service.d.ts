import { Product } from '../products/product.model';
import { ProductsService } from '../products/products.service';
export declare class OrdersService {
    private productsService;
    constructor(productsService: ProductsService);
    private avaibleproducts;
    private cart;
    private order;
    private sumprice;
    addtoCart(prodId: string): any;
    deleteFromCart(prodId: string): any;
    dropCart(): any;
    addOrder(addedProduct: Product[]): any;
    deleteOrder(ordId: string): any;
    updateOrder(orderId: string, fproduct: string, sproduct: string): void;
    private getOrderIndex;
    private getProdIndex;
    private getCartIndex;
}
