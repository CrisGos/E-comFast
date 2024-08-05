import { Router } from 'express';
import CartController from '../controllers/cartController';

export const cartRouter = Router();

try {
    cartRouter.get('/', CartController.getAllCarts);
    cartRouter.get('/:id', CartController.getCartsById);
    cartRouter.post('/', CartController.createCarts);
    cartRouter.put('/:id', CartController.updateCarts);
    cartRouter.delete('/:id', CartController.deleteCarts);
    
} catch (error) {
    throw new Error(`An error occurred: ${error}`);
}