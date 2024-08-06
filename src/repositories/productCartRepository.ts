import { injectable } from 'tsyringe';
import { ProductCart } from '../models/productCart';

@injectable()
export default class ProductCartRepository { // here we created the Repository, this class will receive the information will call the sequelize methods needed
    async findAll() { // this method will call findAll from sequelize
        return await ProductCart.findAll();
    }

    async findById(id: number) { // this method will call findByPk from sequelize
        return await ProductCart.findByPk(id);
    }

    async create(productCart: Partial<ProductCart>) { // this method will call create from sequelize
        return await ProductCart.create(productCart);
    }

    async update(id: number, productCart: Partial<ProductCart>) { // this method will call findByPk and update from sequelize
        const existingProductCart = await ProductCart.findByPk(id);
        if (existingProductCart) {
            return await existingProductCart.update(productCart);
        }
        throw new Error('ProductCart not found');
    }

    async deleteById(id: number) { // this method will call findByPk and destroy from sequelize
        const productCart = await ProductCart.findByPk(id);
        if (productCart) {
            await productCart.destroy();
            return;
        }
        throw new Error('ProductCart not found');
    }
}

// @injectable()
// export default class ProductCartRepository { // here we created the Repository, this class will receive the information will call the sequelize methods needed
//     async findAll() { // this method will call findAll from sequelize
//         return await ProductCart.findAll();
//     }

//     async findById(id: number) { // this method will call findByPk from sequelize
//         return await ProductCart.findByPk(id);
//     }

//     async findByCartId(id: number) {
//         const data: ProductCart[] = await ProductCart.findAll({
//             where: { id },
//             include: [cartId],
//         });
//         return data
//     }

//     async create(productCart: Partial<ProductCart>) { // this method will call create from sequelize
//         return await ProductCart.create(productCart);
//     }

//     async update(id: number, productCart: Partial<ProductCart>) { // this method will call findByPk and update from sequelize
//         const existingProductCart = await ProductCart.findByPk(id);
//         if (existingProductCart) {
//             return await existingProductCart.update(productCart);
//         }
//         throw new Error('ProductCart not found');
//     }

//     async deleteById(id: number) { // this method will call findByPk and destroy from sequelize
//         const productCart = await ProductCart.findByPk(id);
//         if (productCart) {
//             await productCart.destroy();
//             return;
//         }
//         throw new Error('ProductCart not found');
//     }
// }

