import{Controller , Post , Body, Get,Patch,Delete, Param} from '@nestjs/common';
import{ProductsService} from './products.service';
@Controller('products')
export class ProductsController{

    constructor(private productsService : ProductsService){}
    @Post()
    addProduct(@Body('name') prodName : string, @Body('category') prodCategory : string, @Body('price') prodPrice : number)  
    {
      const generatedProd = this.productsService.addProduct(prodName , prodCategory , prodPrice);
      return { addedProduct : generatedProd };
    }



   

    @Get()
    getAllProducts(){
      //  return this.productsService.getAllProducts();
        return "salam ismi vodka";
    }
    
    @Get(':id')
    getProductbyid(@Param('id') prodId : string){
        return this.productsService.getProduct(prodId);
    }

   

    @Patch(':id')
    updateProduct(@Param('id') prodId : string, @Body('name') name : string, @Body('category') category : string , @Body('price') price : number){
        this.productsService.updateProduct(prodId,name,category,price);
        return null;
    }

    @Delete(':id')
    deleteProduct(@Param('id') prodId : string){
        this.productsService.deleteProduct(prodId);
        return null;

    }
}