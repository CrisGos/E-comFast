import { Request, Response } from 'express'; // importing Request and Response from express
import { container } from 'tsyringe'; // using the container to inject dependencies
import ProductService from '../services/productService';



export default class ProductController { // Controller class of product, this class will start with the call of processes after the router
    static async getAllProducts(_: Request, res: Response) { // Get all products has a dependency in services, this method will give a response and will catch any exceptions during the process of GET
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.getAllProducts();
            if (!products) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(products)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async getProductsById(req: Request, res: Response) { // Get products by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of GET by id
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.getProductsById(parseInt(req.params.id));
            if (!products) return res.status(404).json({
                message: "Data not found"
            });
            res.status(200).json(products)

        } catch (error) {
            res.status(500).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }
    
    static async createProducts(req: Request, res: Response) { // create products also has a dependency in services, this method will give a response and will catch any exceptions during the process of POST
        try {
            const productService = container.resolve(ProductService);
            
            const products = await productService.createProducts(req.body);
            console.log(products.toJSON());
            res.status(200).json({
                message: "Data Fetched",
                data: products
            })

        } catch (error) {
            res.status(400).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async updateProducts(req: Request, res: Response) { // update products by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of PUT an specific product
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.updateProducts(parseInt(req.params.id), req.body);
            res.status(200).json(products);
        } catch (error) {
            res.status(404).json({
                message: `An error has occurred`,
                error: error
            })
        }
    }

    static async deleteProducts(req: Request, res: Response) { // delete products by id also has a dependency in services, this method will give a response and will catch any exceptions during the process of DELETE a product given by params
        try {
            const productService = container.resolve(ProductService);
            const products = await productService.deleteProducts(parseInt(req.params.id));
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