import { Router } from 'express';
import { productRouter, userRouter, productCartRouter, authRouter} from './';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/productCarts', productCartRouter);
router.use('/auth', authRouter);

export default router;