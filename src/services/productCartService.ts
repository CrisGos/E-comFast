import ProductCartRepository from '../repositories/productCartRepository';
import { injectable, inject } from 'tsyringe';
import { ProductCart } from "../models/productCart";

@injectable()
export default class ProductCartService { // this class will receive params and / or body from controllers call and will insert it into repositories to call sequelize methods
    constructor(@inject(ProductCartRepository) private productCartRepository: ProductCartRepository) {}

    async getAllProductCarts() { // This method will connect with repositorie of GET
        return await this.productCartRepository.findAll(); 
    }

    async getProductCartsById(id: number) { // This method will connect with repositorie of GET by ID
        return await this.productCartRepository.findById(id);
    }

    async createProductCarts(productCart: Partial<ProductCart>) { // This method will connect with repositorie of POST with productCart type
        console.log(2);
        return await this.productCartRepository.create(productCart);
    }

    async updateProductCarts(id: number, productCart: Partial<ProductCart>) { // This method will connect with repositorie of UPDATE with productCart type
        return await this.productCartRepository.update(id, productCart);
    }

    async deleteProductCarts(id: number) { // This method will connect with repositorie of DELETE
        return await this.productCartRepository.deleteById(id);
    }
}