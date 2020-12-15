"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const products_service_1 = require("../products/products.service");
let OrdersService = class OrdersService {
    constructor(productsService) {
        this.productsService = productsService;
        this.avaibleproducts = this.productsService.getAllProducts();
        this.cart = [];
        this.order = [];
        this.sumprice = 0;
    }
    addtoCart(prodId) {
        const oneproduct = this.productsService.getProduct(prodId);
        this.cart.push(oneproduct);
        return null;
    }
    deleteFromCart(prodId) {
        const index = this.getCartIndex(prodId);
        this.cart.slice(index, 1);
        return null;
    }
    dropCart() {
        this.cart = [];
        return null;
    }
    confirmOrder(addedCart) {
        addedCart = this.cart;
        const localOrder = null;
        localOrder.productslist = this.cart;
        localOrder.id = Math.random().toString();
        for (let i = 0; i < this.cart.length; i++) {
            this.sumprice = this.sumprice + this.cart[i].price;
        }
        localOrder.totalprice = this.sumprice;
        this.order.push(localOrder);
        this.cart = [];
        this.sumprice = 0;
        return null;
    }
    updateCart(fproduct, sproduct) {
        var firstproduct = this.productsService.getProduct(fproduct);
        var secondproduct = this.productsService.getProduct(sproduct);
        const productindex = this.getCartIndex(fproduct);
        if (firstproduct.category === secondproduct.category) {
            this.cart[productindex] = secondproduct;
        }
        else {
            throw new common_1.NotFoundException('Could not change this product.');
        }
        return null;
    }
    deleteOrder(ordId) {
        const index = null;
        this.order.splice(index, 1);
        return null;
    }
    getOrderIndex(oId) {
        const orderindex = this.order.findIndex(oid => oid.id === oId);
        return orderindex;
    }
    getProdIndex(oId) {
        const order = this.order.findIndex(ord => ord.id === oId);
        if (!order) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        return order;
    }
    getCartIndex(pId) {
        const product = this.cart.findIndex(prod => prod.id === pId);
        if (!product) {
            throw new common_1.NotFoundException('Could not find product.');
        }
        return product;
    }
};
OrdersService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map