import {Injectable, NotFoundException} from '@nestjs/common';
import{Product} from '../products/product.model';
import{Order} from './order.model';
import{ProductsService} from '../products/products.service';
@Injectable()
export class OrdersService {

    constructor(private productsService : ProductsService){}
    private avaibleproducts :Product[] =this.productsService.getAllProducts()  ;
    private cart : Product[] = [];
    private order : Order[] = [];
    private sumprice : number = 0;



    // We add a cart to store the products before the client confirm order

    //Adding one product to cart 
    addtoCart(prodId  : string)
    {
      const  oneproduct  = this.productsService.getProduct(prodId);
      this.cart.push(oneproduct);
      return null;
    }

    //Delete one product from cart
    deleteFromCart(prodId  : string)
    {
      const index = this.getCartIndex(prodId);
      this.cart.slice(index , 1);
      return null;
    }

     //Remove all items from cart
     dropCart()
     {
       this.cart=[];
       return null;
     }

     //Order methods

     // Add New Order
     confirmOrder(addedCart: Product[])
     {
        addedCart = this.cart;

        const localOrder : Order = null;


        localOrder.productslist =this.cart;
        localOrder.id = Math.random().toString();

        // we calculate the sum of all products in the cart
        for(let i=0;i<this.cart.length; i++)
        {
            this.sumprice = this.sumprice + this.cart[i].price;
        }

        localOrder.totalprice = this.sumprice;

        this.order.push(localOrder);
        this.cart = [];
        this.sumprice = 0;
        
        
        return null;
      
     }
    
     updateCart( fproduct : string , sproduct : string )
     {
       // We Use the method getProduct from the product module to find the products that we want to exchange
         var firstproduct = this.productsService.getProduct(fproduct);
         var secondproduct = this.productsService.getProduct(sproduct);

         // We get the product index from index cart
         const productindex = this.getCartIndex(fproduct);

         if(firstproduct.category === secondproduct.category)
        {
          this.cart[productindex] = secondproduct;
        }
        else
        {
          throw new NotFoundException('Could not change this product.');
        }

        return null;
        
      }

     deleteOrder(ordId : string)
     {
        const index = null;
        this.order.splice(index,1);
         return null;

     }
    
    // look up the index of an order in the cart list
    private getOrderIndex(oId : string)
    {
        const orderindex = this.order.findIndex(oid => oid.id === oId)
      
       return orderindex;
    }


    //get Order Product index

    private getProdIndex(oId : string)
    {
        const order = this.order.findIndex(ord => ord.id === oId);
        if (!order) {
            throw new NotFoundException('Could not find product.');
          }
       return order;
    }

    


    
    // look up the index of a product in the cart list
    private getCartIndex(pId : string)
    {
        const product = this.cart.findIndex(prod => prod.id === pId);
        if (!product) {
            throw new NotFoundException('Could not find product.');
          }
       return product;
    }
}

