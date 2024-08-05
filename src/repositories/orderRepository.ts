import { injectable } from 'tsyringe';
import { Order } from '../models/order';

@injectable()
export default class OrderRepository { // here we created the Repository, this class will receive the information will call the sequelize methods needed
    async findAll() { // this method will call findAll from sequelize
        return await Order.findAll();
    }

    async findById(id: number) { // this method will call findByPk from sequelize
        return await Order.findByPk(id);
    }

    async create(order: Partial<Order>) { // this method will call create from sequelize
        return await Order.create(order);
    }

    async update(id: number, order: Partial<Order>) { // this method will call findByPk and update from sequelize
        const existingOrder = await Order.findByPk(id);
        if (existingOrder) {
            return await existingOrder.update(order);
        }
        throw new Error('Order not found');
    }

    async deleteById(id: number) { // this method will call findByPk and destroy from sequelize
        const order = await Order.findByPk(id);
        if (order) {
            await order.destroy();
            return;
        }
        throw new Error('Order not found');
    }
}