import {Product} from './product';

export interface Order {
    id : string;
    totalprice : number;
    productslist : Product[];  
}
