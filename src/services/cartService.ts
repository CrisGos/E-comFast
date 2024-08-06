import CartRepository from '../repositories/cartRepository';
import { injectable, inject } from 'tsyringe';
import { Cart } from "../models/cart";

@injectable()
export default class CartService { // this class will receive params and / or body from controllers call and will insert it into repositories to call sequelize methods
    constructor(@inject(CartRepository) private cartRepository: CartRepository) {}

    async getAllCarts() { // This method will connect with repositorie of GET
        return await this.cartRepository.findAll(); 
    }

    async getCartsById(id: number) { // This method will connect with repositorie of GET by ID
        return await this.cartRepository.findById(id);
    }

    async createCarts(cart: Partial<Cart>) { // This method will connect with repositorie of POST with cart type
        return await this.cartRepository.create(cart);
    }

    async updateCarts(id: number, cart: Partial<Cart>) { // This method will connect with repositorie of UPDATE with cart type
        return await this.cartRepository.update(id, cart);
    }

    async deleteCarts(id: number) { // This method will connect with repositorie of DELETE
        return await this.cartRepository.deleteById(id);
    }
}