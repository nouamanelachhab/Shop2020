import { Product } from "../products/product.model";
export declare class Order {
    id: string;
    totalprice: number;
    productslist: Product[];
    constructor(id: string, totalprice: number, productslist: Product[]);
}
