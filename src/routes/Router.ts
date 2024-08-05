import { Router } from 'express';
import { productRouter, userRouter } from './';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;