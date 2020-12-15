import {Injectable, NotFoundException} from '@nestjs/common';
import{Product} from './product.model';

@Injectable()
export class ProductsService {
    private products :Product[] = [];

    addProduct(name:string, category : string, price : number) {
        const productId = Math.random().toString();
        const newProduct = new Product(productId.toString(), name, category, price);
        this.products.push(newProduct);
        return productId +" "+ name;
    }

    getAllProducts(){
        return this.products;
    }

    getProduct(pId:string){
       const product =  this.products.find(prod => prod.id === pId);
       if (!product) {
        throw new NotFoundException('Could not find product.');
      }
        return product;
    }

    
  updateProduct(pId: string, name: string, category: string, price: number) {
    const index = this.getProductIndex(pId);
    const product = this.getProduct(pId);
    const updatedProduct = { ...product };
    if (name) {
      updatedProduct.name = name;
    }
    if (category) {
      updatedProduct.category = category;
    }
    if (price) {
      updatedProduct.price = price;
    }
    this.products[index] = updatedProduct;
  }

  deleteProduct(pId: string) {
      const index = this.getProductIndex(pId);
      this.products.splice(index, 1);
  }
    
    private getProductIndex(pId : string)
    {
        const product = this.products.findIndex(prod => prod.id === pId);
        if (!product) {
            throw new NotFoundException('Could not find product.');
          }
       return product;
    }
}