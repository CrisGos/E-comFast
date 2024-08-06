import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    BelongsTo,
    ForeignKey,
    HasMany,
} from "sequelize-typescript";
import { Order } from './order';
import { Cart } from './cart';
import { Product } from './product';


@Table({//here we deterimine the tableName and timestamp
    tableName:"productCarts",
    timestamps:true,
})
export class ProductCart extends Model { // This class will extend from Model it'll allow us to use somo parameters
    @PrimaryKey // We use decorators to define PK, Autoincrement, Columns and relation between entities
    @AutoIncrement
    @Column({
        type: DataType.INTEGER,
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    quantity!: number;

    @ForeignKey(() => Cart)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    cartId!: number;

    @BelongsTo(() => Cart)
    cart!: Cart;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: true,
    })
    productId!: number;

    @BelongsTo(() => Product)
    product!: Product;

    @HasMany(() => Order)
    order!: Order[];
}