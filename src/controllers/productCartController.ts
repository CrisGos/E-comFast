import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ProductCartService from '../services/productCartService';



export default class ProductCartController { // Controller class of productCarts, this class will start with the call of processes after the router
    static async getAllProductCarts(_: Request, res: Response) {// Get all productCarts has a dependency in services, this method will give a response and will catch any exceptions during the process of GET
        try {
            const productCartService = container.resolve(ProductCartService); // Get productCarts by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
            const productCarts = await productCartService.getAllProductCarts();
            if (!productCarts) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(productCarts)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getProductCartsById(req: Request, res: Response) { // Get productCarts by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
        try {
            const productCartService = container.resolve(ProductCartService);
            const productCarts = await productCartService.getProductCartsById(parseInt(req.params.id));
            if (!productCarts) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(productCarts)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createProductCarts(req: Request, res: Response) { // create productCarts also has a dependency in services, this method will give a response and will catch any exceptions during the process of POST
        try {
            const productCartService = container.resolve(ProductCartService);
            
            const productCarts = await productCartService.createProductCarts(req.body);
            console.log(productCarts.toJSON());
            res.status(201).json(productCarts)

        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updateProductCarts(req: Request, res: Response) {  // update productCarts by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of PUT an specific productCart
        try {
            const productCartService = container.resolve(ProductCartService);
            const productCarts = await productCartService.updateProductCarts(parseInt(req.params.id), req.body);
            res.status(200).json(productCarts);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deleteProductCarts(req: Request, res: Response) { // delete productCarts by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of DELETE a productCart given by params
        try {
            const productCartService = container.resolve(ProductCartService);
            const productCarts = await productCartService.deleteProductCarts(parseInt(req.params.id));
            res.status(200).json(productCarts);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
}