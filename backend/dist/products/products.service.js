"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_model_1 = require("./product.model");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    addProduct(name, category, price) {
        const productId = Math.random().toString();
        const newProduct = new product_model_1.Product(productId.toString(), name, category, price);
        this.products.push(newProduct);
        return productId + " " + name;
    }
    getAllProducts() {
        return this.products;
    }
    getProduct(pId) {
        const product = this.products.find(prod => prod.id === pId);
        if (!product) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        return product;
    }
    updateProduct(pId, name, category, price) {
        const index = this.getProductIndex(pId);
        const product = this.getProduct(pId);
        const updatedProduct = Object.assign({}, product);
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
    deleteProduct(pId) {
        const index = this.getProductIndex(pId);
        this.products.splice(index, 1);
    }
    getProductIndex(pId) {
        const product = this.products.findIndex(prod => prod.id === pId);
        if (!product) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        return product;
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map