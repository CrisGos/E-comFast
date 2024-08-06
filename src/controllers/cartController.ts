import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CartService from '../services/cartService';



export default class CartController { // Controller class of carts, this class will start with the call of processes after the router
    static async getAllCarts(_: Request, res: Response) {// Get all carts has a dependency in services, this method will give a response and will catch any exceptions during the process of GET
        try {
            
        } catch (error) {
            
        }
        try {
            const cartService = container.resolve(CartService); // Get carts by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
            const carts = await cartService.getAllCarts();
            if (!carts) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json({
                message: "Data Fetched",
                data: carts
            })

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getCartsById(req: Request, res: Response) { // Get carts by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
        try {
            const cartService = container.resolve(CartService);
            const carts = await cartService.getCartsById(parseInt(req.params.id));
            if (!carts) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(carts)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createCarts(req: Request, res: Response) { // create carts also has a dependency in services, this method will give a response and will catch any exceptions during the process of POST
        try {
            const cartService = container.resolve(CartService);
            
            const carts = await cartService.createCarts(req.body);
            console.log(carts.toJSON());
            res.status(201).json(carts)

        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updateCarts(req: Request, res: Response) {  // update carts by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of PUT an specific cart
        try {
            const cartService = container.resolve(CartService);
            const carts = await cartService.updateCarts(parseInt(req.params.id), req.body);
            res.status(200).json(carts);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deleteCarts(req: Request, res: Response) { // delete carts by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of DELETE a cart given by params
        try {
            const cartService = container.resolve(CartService);
            const carts = await cartService.deleteCarts(parseInt(req.params.id));
            res.status(200).json({
                nessage: "Data deleted successfully"
            });
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
}