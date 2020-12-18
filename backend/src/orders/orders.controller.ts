import{Controller , Post , Body, Get,Patch,Delete, Param} from '@nestjs/common';
import { ServerResponse } from 'http';
import{OrdersService} from './orders.service';

@Controller('orders')
export class OrdersController{

    constructor(private ordersService : OrdersService){
      
    }
  
    
    @Post()
    addtoCart(@Body('id') prodId : string,)  
    {
      const generatedProd = this.ordersService.addtoCart(prodId);

    
      return "added successfully";
    }

    @Get()
    showCart()
    {
        return this.ordersService.getCart();
    }

    

   

    @Patch(':id')
    updateCart(@Param('id') firstid : string , @Body('secondid') secondid: string){
        
        this.ordersService.updateCart(firstid,secondid);
        return ServerResponse;
    }

    
    
    @Delete(':id')
    deleteProduct(@Param('id') prodId : string){
      this.ordersService.deleteOrder;
        return ServerResponse;

    }

    
}