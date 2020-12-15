export declare class ProductsService {
    private products;
    addProduct(name: string, category: string, price: number): string;
    getAllProducts(): any[];
    getProduct(pId: string): any;
    updateProduct(pId: string, name: string, category: string, price: number): void;
    deleteProduct(pId: string): void;
    private getProductIndex;
}
