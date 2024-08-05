import { Router } from 'express';
import OrderController from '../controllers/orderController';

export const orderRouter = Router();

try {
    orderRouter.get('/', OrderController.getAllOrders);
    orderRouter.get('/:id', OrderController.getOrdersById);
    orderRouter.post('/', OrderController.createOrders);
    orderRouter.put('/:id', OrderController.updateOrders);
    orderRouter.delete('/:id', OrderController.deleteOrders);
    
} catch (error) {
    throw new Error(`An error occurred: ${error}`);
}