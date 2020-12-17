import { ProductsService } from './products.service';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    addProduct(prodName: string, prodCategory: string, prodPrice: number): {
        addedProduct: string;
    };
    getAllProducts(): string;
    getProductbyid(prodId: string): import("./product.model").Product;
    updateProduct(prodId: string, name: string, category: string, price: number): any;
    deleteProduct(prodId: string): any;
}
