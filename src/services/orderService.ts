import OrderRepository from '../repositories/orderRepository';
import { injectable, inject } from 'tsyringe';
import { Order } from "../models/order";
import ProductCartService from './productService';

@injectable()
export default class OrderService { // this class will receive params and / or body from controllers call and will insert it into repositories to call sequelize methods
    constructor(@inject(OrderRepository) private orderRepository: OrderRepository) {}

    async getAllOrders() { // This method will connect with repositorie of GET
        return await this.orderRepository.findAll(); 
    }

    async getOrdersById(id: number) { // This method will connect with repositorie of GET by ID
        return await this.orderRepository.findById(id);
    }

    async createOrders() { // This method will connect with repositorie of POST with order type
        const order: Partial<Order> = {
            "total": ProductCartService.getProductsByCartId(id: number)
        }
        return await this.orderRepository.create(order);
    }

    async updateOrders(id: number, order: Partial<Order>) { // This method will connect with repositorie of UPDATE with order type
        return await this.orderRepository.update(id, order);
    }

    async deleteOrders(id: number) { // This method will connect with repositorie of DELETE
        return await this.orderRepository.deleteById(id);
    }
}


// @injectable()
// export default class OrderService { // this class will receive params and / or body from controllers call and will insert it into repositories to call sequelize methods
//     constructor(@inject(OrderRepository) private orderRepository: OrderRepository) {}

//     async getAllOrders() { // This method will connect with repositorie of GET
//         return await this.orderRepository.findAll(); 
//     }

//     async getOrdersById(id: number) { // This method will connect with repositorie of GET by ID
//         return await this.orderRepository.findById(id);
//     }

//     async createOrders(order: Partial<Order>) { // This method will connect with repositorie of POST with order type
//         return await this.orderRepository.create(order);
//     }

//     async updateOrders(id: number, order: Partial<Order>) { // This method will connect with repositorie of UPDATE with order type
//         return await this.orderRepository.update(id, order);
//     }

//     async deleteOrders(id: number) { // This method will connect with repositorie of DELETE
//         return await this.orderRepository.deleteById(id);
//     }
// }