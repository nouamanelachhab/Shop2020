import{Product} from "../products/product.model";
export class Order{
    id : string;
    totalprice : number;
    productslist : Product[];  
    constructor(id: string, totalprice: number,productslist : Product[]){

        this.id = id;
        this.totalprice = totalprice;
        this.productslist = productslist;
    };
  }