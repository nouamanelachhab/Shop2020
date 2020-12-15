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
    getCart(): Product[];
    updateCart(fproduct: string, sproduct: string): any;
    dropCart(): any;
    confirmOrder(addedCart: Product[]): any;
    deleteOrder(ordId: string): any;
    private getOrderIndex;
    private getProdIndex;
    private getCartIndex;
}
