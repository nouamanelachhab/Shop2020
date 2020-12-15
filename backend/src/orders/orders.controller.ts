import{Controller , Post , Body, Get,Patch,Delete, Param} from '@nestjs/common';
import{OrdersService} from './orders.service';
@Controller('orders')
export class OrdersController{

    constructor(private ordersService : OrdersService){}
    
    @Post()
    addtoCart(@Body('id') prodId : string,)  
    {
      const generatedProd = this.ordersService.addtoCart(prodId);
      return { addedProduct : generatedProd };
    }

    @Get()
    showCart()
    {
        return this.showCart();
    }
}