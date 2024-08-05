import { injectable } from 'tsyringe';
import { Cart } from '../models/cart';

@injectable()
export default class CartRepository { // here we created the Repository, this class will receive the information will call the sequelize methods needed
    async findAll() { // this method will call findAll from sequelize
        return await Cart.findAll();
    }

    async findById(id: number) { // this method will call findByPk from sequelize
        return await Cart.findByPk(id);
    }

    async create(cart: Partial<Cart>) { // this method will call create from sequelize
        return await Cart.create(cart);
    }

    async update(id: number, cart: Partial<Cart>) { // this method will call findByPk and update from sequelize
        const existingCart = await Cart.findByPk(id);
        if (existingCart) {
            return await existingCart.update(cart);
        }
        throw new Error('Cart not found');
    }

    async deleteById(id: number) { // this method will call findByPk and destroy from sequelize
        const cart = await Cart.findByPk(id);
        if (cart) {
            await cart.destroy();
            return;
        }
        throw new Error('Cart not found');
    }
}