import { Product } from './product.model';
export declare class ProductsService {
    private products;
    addProduct(name: string, category: string, price: number): string;
    getAllProducts(): Product[];
    getProduct(pId: string): Product;
    deleteALL(): void;
    updateProduct(pId: string, name: string, category: string, price: number): void;
    deleteProduct(pId: string): void;
    private getProductIndex;
}
