import { Router } from 'express';
import { productRouter, userRouter, orderRouter, cartRouter, productCartRouter, entityRouter, permissionRouter, roleRouter } from './';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', orderRouter);
router.use('/carts', cartRouter);
router.use('/productCarts', productCartRouter);
router.use('/entities', entityRouter);
router.use('/permissions', permissionRouter);
router.use('/roles', roleRouter);

export default router;