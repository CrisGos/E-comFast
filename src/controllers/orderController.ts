import { Request, Response } from 'express';
import { container } from 'tsyringe';
import OrderService from '../services/orderService';



export default class OrderController { // Controller class of orders, this class will start with the call of processes after the router
    static async getAllOrders(_: Request, res: Response) {// Get all orders has a dependency in services, this method will give a response and will catch any exceptions during the process of GET
        try {
            const orderService = container.resolve(OrderService); // Get orders by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
            const orders = await orderService.getAllOrders();
            if (!orders) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(orders)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getOrdersById(req: Request, res: Response) { // Get orders by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.getOrdersById(parseInt(req.params.id));
            if (!orders) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(orders)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createOrders(req: Request, res: Response) { // create orders also has a dependency in services, this method will give a response and will catch any exceptions during the process of POST
        try {
            const orderService = container.resolve(OrderService);
            
            const orders = await orderService.createOrders(req.body);
            console.log(orders.toJSON());
            res.status(201).json(orders)

        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updateOrders(req: Request, res: Response) {  // update orders by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of PUT an specific order
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.updateOrders(parseInt(req.params.id), req.body);
            res.status(200).json(orders);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deleteOrders(req: Request, res: Response) { // delete orders by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of DELETE a order given by params
        try {
            const orderService = container.resolve(OrderService);
            const orders = await orderService.deleteOrders(parseInt(req.params.id));
            res.status(200).json(orders);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
}