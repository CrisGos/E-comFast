import ProductRepository from '../repositories/productRepository';
import { injectable, inject } from 'tsyringe';
import { Product } from "../models/product";

@injectable()
export default class ProductService { // this class will receive params and / or body from controllers call and will insert it into repositories to call sequelize methods
    constructor(@inject(ProductRepository) private productRepository: ProductRepository) {}

    async getAllProducts() { // This method will connect with repositorie of GET
        return await this.productRepository.findAll();
    }

    async getProductsById(id: number) { // This method will connect with repositorie of GET by ID
        return await this.productRepository.findById(id);
    }

    async createProducts(product: Partial<Product>) { // This method will connect with repositorie of POST with user type
        return await this.productRepository.create(product);
    }

    async updateProducts(id: number, product: Partial<Product>) { // This method will connect with repositorie of UPDATE with user type
        return await this.productRepository.update(id, product);
    }

    async deleteProducts(id: number) { // This method will connect with repositorie of DELETE
        return await this.productRepository.deleteById(id);
    }
}